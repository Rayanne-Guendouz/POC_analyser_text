import { Component } from '@angular/core';
import { TextAnalyzerComponent } from './text-analyzer/text-analyzer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TextAnalyzerComponent],
  template: `<app-text-analyzer />`
})
export class AppComponent {}

