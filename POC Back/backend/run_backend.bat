@echo off
:: Active l'environnement conda
call conda activate poc-nlp

:: Va dans le dossier contenant main.py
cd /d "C:\Users\rguendouz\Documents\cours\m2\Management des connaissances\projet\POC Back\backend"

:: Lance le serveur FastAPI avec uvicorn
uvicorn main:app --reload --port 8000

:: Garde la fenêtre ouverte après exécution
pause
