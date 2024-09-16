import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WelcomeAreaComponent } from '../welcome-area/welcome-area.component';
import { AboutMeComponent } from "../about-me/about-me.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, WelcomeAreaComponent, AboutMeComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
