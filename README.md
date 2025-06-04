📚 Projet POC — Extracteur de Connaissances à partir d'un Texte

🚀 Description

Ce projet est un Proof of Concept (POC) visant à analyser un texte en langue française pour :

Faire du POS Tagging (étiquetage grammatical),

Extraire des Entités Nommées (NER),

Identifier automatiquement les thèmes principaux du texte grâce à un LLM local (Mistral via Ollama).

Le front-end est développé en Angular, le back-end en FastAPI et l’analyse sémantique repose sur spaCy et Mistral.

🛠️ Stack Technique

Frontend : Angular 17

Backend : FastAPI (Python 3.11)

NLP : spaCy (fr_core_news_md)

LLM : Mistral via Ollama

API Communication : HTTP REST (JSON)

📦 Installation

1. Prérequis

Node.js (v18+ recommandé)

Angular CLI

Python 3.11

Conda (Miniconda/Anaconda)

Ollama pour exécuter Mistral en local

2. Cloner le projet

git clone <URL_DU_DEPOT>
cd <ton-projet>

3. Installation du backend (FastAPI)

a. Créer et activer l’environnement Conda

conda create -n poc-nlp python=3.11 -y
conda activate poc-nlp

b. Installer les dépendances

pip install fastapi uvicorn spacy requests
python -m spacy download fr_core_news_md

c. Lancer le serveur FastAPI

uvicorn main:app --reload --port 8000

4. Installation du Frontend (Angular)

a. Installer les dépendances

cd frontend
npm install

b. Lancer le serveur Angular

ng serve

Le front sera disponible à : http://localhost:4200

5. Installation et Lancement d'Ollama (Mistral)

a. Télécharger et installer Ollama

👉 https://ollama.com/download

b. Télécharger et lancer Mistral

ollama run mistral

Cela démarre un serveur Ollama local à http://localhost:11434.

🔍 Fonctionnalités

✍️ Saisie d'un texte libre en français.

📑 POS Tagging : Catégorisation grammaticale de chaque mot.

🏷️ NER : Détection d'entités nommées (personnes, lieux, organisations, etc.).

🎯 Extraction thématique : Identification automatique des thèmes principaux via LLM local.

🖥️ Interface claire et réactive sous Angular.

📸 Aperçu de l'interface

(Tu peux ajouter une capture d’écran ici)

⚙️ Endpoints API

POST /analyze

Analyse POS & NER avec spaCy.

Corps attendu :

{
  "text": "Votre texte ici."
}

Réponse :

{
  "tokens": [{ "text": "...", "pos": "..." }],
  "entities": [{ "text": "...", "label": "..." }]
}

POST /themes

Extraction thématique via Mistral.

Corps attendu :

{
  "text": "Votre texte ici."
}

Réponse :

{
  "themes": ["Thème1", "Thème2", "Thème3"]
}

🧑‍💻 Auteur

Guendouz RayaneÉtudiant en Master Informatique, Université de Grenoble.

📜 Licence

Projet POC — Utilisation académique uniquement.
