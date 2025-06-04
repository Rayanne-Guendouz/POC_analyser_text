from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import spacy
import requests




# Création de l'app FastAPI
app = FastAPI()

# Chargement du modèle spaCy français
nlp = spacy.load("fr_core_news_md")

# Autoriser les appels depuis le frontend Angular
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4200"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Structure attendue en entrée
class TextInput(BaseModel):
    text: str

# Route POST /analyze
@app.post("/analyze")
def analyze_text(input: TextInput):
    doc = nlp(input.text)

    # Extraction POS
    tokens = [{"text": token.text, "pos": token.pos_} for token in doc]

    # Extraction des entités nommées
    entities = [{"text": ent.text, "label": ent.label_} for ent in doc.ents]

    return {
        "tokens": tokens,
        "entities": entities
    }




@app.post("/themes")
def get_themes(input: TextInput):
    prompt = (
        "Voici un texte :\n"
        f"{input.text}\n\n"
        "Donne uniquement les thèmes principaux du texte sous forme de liste claire, sans phrases :"
    )

    try:
        response = requests.post(
            "http://localhost:11434/api/generate",
            json={"model": "mistral", "prompt": prompt, "stream": False}
        )

        if response.status_code != 200:
            return {"error": "Erreur avec Ollama"}

        content = response.json().get("response", "").strip()

        # Nettoyage basique : on transforme la réponse en liste
        themes = [line.strip("-• \n") for line in content.splitlines() if line.strip()]
        return {"themes": themes}

    except Exception as e:
        return {"error": str(e)}
