
# 📚 Projet POC — Extracteur de Connaissances à partir d'un Texte

## 🚀 Description

Ce projet est un **Proof of Concept** (POC) visant à analyser un texte en langue française pour :
- Faire du **POS Tagging** (étiquetage grammatical),
- Extraire des **Entités Nommées** (NER),
- Identifier automatiquement les **thèmes principaux** du texte grâce à un **LLM local** (**Mistral** via **Ollama**).

Le front-end est développé en **Angular**, le back-end en **FastAPI** et l’analyse sémantique repose sur **spaCy** et **Mistral**.

## 🛠️ Stack Technique

- **Frontend** : Angular 17
- **Backend** : FastAPI (Python 3.11)
- **NLP** : spaCy (`fr_core_news_md`)
- **LLM** : Mistral via Ollama
- **API Communication** : HTTP REST (JSON)

## 📦 Installation

### 1. Prérequis

- [Node.js](https://nodejs.org/) (v18+ recommandé)
- [Angular CLI](https://angular.io/cli)
- [Python 3.11](https://www.python.org/)
- [Conda](https://docs.conda.io/en/latest/) (Miniconda/Anaconda)
- [Ollama](https://ollama.com/) pour exécuter Mistral en local

### 2. Cloner le projet

```bash
git clone <URL_DU_DEPOT>
cd <ton-projet>
```

### 3. Installation du backend (FastAPI)

```bash
conda create -n poc-nlp python=3.11 -y
conda activate poc-nlp
pip install fastapi uvicorn spacy requests
python -m spacy download fr_core_news_md
uvicorn main:app --reload --port 8000
```

### 4. Installation du Frontend (Angular)

```bash
cd frontend
npm install
ng serve
```

Accès : [http://localhost:4200](http://localhost:4200)

### 5. Installation et Lancement d'Ollama (Mistral)

```bash
ollama run mistral
```

Serveur local sur [http://localhost:11434](http://localhost:11434).

## 🔍 Fonctionnalités

- ✍️ **Saisie** d'un texte libre en français.
- 📑 **POS Tagging** : Catégorisation grammaticale de chaque mot.
- 🏷️ **NER** : Détection d'entités nommées.
- 🎯 **Extraction thématique** : Identification automatique des thèmes principaux via LLM local.
- 🖥️ **Interface claire et réactive** sous Angular.

## 📸 Aperçu de l'interface

> *(Insérer une capture d’écran ici)*

## ⚙️ Endpoints API

### `POST /analyze`
Analyse POS & NER avec spaCy.
```json
{
  "text": "Votre texte ici."
}
```
Réponse :
```json
{
  "tokens": [{ "text": "...", "pos": "..." }],
  "entities": [{ "text": "...", "label": "..." }]
}
```

### `POST /themes`
Extraction thématique via Mistral.
```json
{
  "text": "Votre texte ici."
}
```
Réponse :
```json
{
  "themes": ["Thème1", "Thème2", "Thème3"]
}
```

## 🧑‍💻 Auteur

**Guendouz Rayane**  
Étudiant en Master Informatique, Université de Grenoble.

## 📜 Licence

Projet POC — Utilisation académique uniquement.

## ✅ TODO (idées d’améliorations)

- [ ] Ajouter un système de pondération des thèmes
- [ ] Support multilingue
- [ ] Optimiser les performances d'analyse pour textes longs
- [ ] Ajouter une interface responsive mobile
- [ ] Exportation des résultats en PDF/CSV
