import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  currentLanguage: string = 'EN';

  constructor(private translate: TranslateService) {
    this.currentLanguage = translate.currentLang?.toUpperCase() || 'EN'; // beginnt immer mit en. also standart
  }

  switchLanguage() {
    this.currentLanguage = this.currentLanguage === 'DE' ? 'EN' : 'DE';
    this.translate.use(this.currentLanguage.toLowerCase()); 
  }
}
