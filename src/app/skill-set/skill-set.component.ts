import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss'
})
export class SkillSetComponent {

  skills = [
    { src: 'assets/img/1-html-icon.png', label: 'HTML' },
    { src: 'assets/img/2-css-icon.png', label: 'CSS' },
    { src: 'assets/img/3-javascript-icon.png', label: 'Java Script' },
    { src: 'assets/img/4-materialdesign-icon.png', label: 'Material Design' },
    { src: 'assets/img/5-typescript-icon.png', label: 'Type Script' },
    { src: 'assets/img/6-angular-icon.png', label: 'Angular' },
    { src: 'assets/img/7-firebase-icon.png', label: 'Firebase' },
    { src: 'assets/img/8-git-icon.png', label: 'Git' },
    { src: 'assets/img/9-restapi-icon.png', label: 'REST API' },
    { src: 'assets/img/10-scrum-icon.png', label: 'Scrum' }   
  ];

}
