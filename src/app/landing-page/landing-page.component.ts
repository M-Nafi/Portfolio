import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WelcomeAreaComponent } from '../welcome-area/welcome-area.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, WelcomeAreaComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
