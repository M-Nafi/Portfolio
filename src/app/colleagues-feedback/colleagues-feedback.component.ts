import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-colleagues-feedback',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './colleagues-feedback.component.html',
  styleUrl: './colleagues-feedback.component.scss',
})

export class ColleaguesFeedbackComponent {
  feedback = [
    { text: 'Our project benefited enormously from Lukas efficient way of working.' },
    { text: 'Lukas has proven to be a reliable group partner. His technical skills and proactive approach were crucial to the success of our project. ' },
    { text: 'I had the good fortune of working with Simon in a group project at the Developer Akademie that involved a lot of effort. He always stayed calm, cool, and focused, and made sure our team was set up for success. He is super knowledgeable, easy to work with, and I would happily work with him again given the chance.' },
  ];

  onFeedbackClick(feedback: any) {
    console.log('Clicked feedback', feedback);
  }
}
