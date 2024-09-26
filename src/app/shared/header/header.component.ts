import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  currentLanguage: string = 'EN'; 

  translations: {
    [ key: string ]: 
    {
      aboutMe: string;
      skills: string;
      projects: string;
    }
  } = {
    EN: 
    {
      aboutMe: 'About me',
      skills: 'Skills',
      projects: 'Projects'
    },
    DE: 
    {
      aboutMe: 'Über mich',
      skills: 'Fähigkeiten',
      projects: 'Projekte'
    }
  };

  switchLanguage() {
    this.currentLanguage = this.currentLanguage === 'DE' ? 'EN' : 'DE';
  }

  get aboutMe() {
    return this.translations[this.currentLanguage].aboutMe;
  }

  get skills() {
    return this.translations[this.currentLanguage].skills;
  }

  get projects() {
    return this.translations[this.currentLanguage].projects;
  }
}
