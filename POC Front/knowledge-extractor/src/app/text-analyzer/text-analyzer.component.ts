import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-text-analyzer',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './text-analyzer.component.html',
  styleUrls: ['./text-analyzer.component.css']
})
export class TextAnalyzerComponent {
  textInput: string = '';
  tokens: any[] = [];
  entities: any[] = [];
  themes: string[] = [];


  constructor(private http: HttpClient) {}

  analyzeText() {
    if (!this.textInput.trim()) return;

    this.http.post<any>('http://localhost:8000/analyze', { text: this.textInput }).subscribe({
      next: (res) => {
        this.tokens = res.tokens;
        this.entities = res.entities;

        
      },
      error: (err) => {
        console.error('Erreur analyse texte :', err);
      }
    });
  }

  isLoadingLLM = false;

getThemesWithLLM() {
  const textToSend = this.textInput?.trim();
  if (!textToSend) return;

  this.isLoadingLLM = true;

  this.http.post<any>('http://localhost:8000/themes', { text: textToSend }, {
    headers: { 'Content-Type': 'application/json; charset=utf-8' }
  }).subscribe({
    next: (res) => {
      this.themes = res.themes;
      this.isLoadingLLM = false;
    },
    error: (err) => {
      console.error('Erreur avec l’API /themes :', err);
      this.isLoadingLLM = false;
    }
  });
}

}