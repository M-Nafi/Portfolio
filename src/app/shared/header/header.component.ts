import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-header',
    imports: [CommonModule, TranslateModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMobileNavVisible = false;
  currentResponsiveMenuIcon: string = './assets/img/menu-icon.png';

  currentLanguage: string = 'EN';  

  constructor(private translate: TranslateService) {
    this.currentLanguage = translate.currentLang?.toUpperCase() || 'EN'; 
  }

  switchLanguage() {
    this.currentLanguage = this.currentLanguage === 'DE' ? 'EN' : 'DE';
    this.translate.use(this.currentLanguage.toLowerCase());
    this.currentResponsiveMenuIcon = './assets/img/menu-icon.png'; 
    this.isMobileNavVisible = false;  
  } 

  switchMenuIcon() {
    if (this.currentResponsiveMenuIcon == './assets/img/menu-icon.png') {
      this.currentResponsiveMenuIcon = './assets/img/responsive-close-icon.png';
      this.isMobileNavVisible = true;      
    } else {
      this.currentResponsiveMenuIcon = './assets/img/menu-icon.png';
      this.isMobileNavVisible = false;
    }
  }
  
  closeMobileNav() {
    this.isMobileNavVisible = false;
    this.currentResponsiveMenuIcon = './assets/img/menu-icon.png';
  }

  hideMobileNav(event: Event) {
    event.stopPropagation(); 
    this.isMobileNavVisible = false;
    this.currentResponsiveMenuIcon = './assets/img/menu-icon.png';
  }
}
