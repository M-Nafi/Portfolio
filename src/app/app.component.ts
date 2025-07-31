import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { WelcomeAreaComponent } from './welcome-area/welcome-area.component';
import { CommonModule } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    imports: [
        RouterLink,
        RouterOutlet,
        HeaderComponent,
        FooterComponent,
        WelcomeAreaComponent,
        CommonModule,
        TranslateModule,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router,
    translate: TranslateService
  ) {
    translate.setDefaultLang('en');
    translate.use('en');
  }
}
