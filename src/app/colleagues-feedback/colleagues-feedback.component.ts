import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colleagues-feedback',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './colleagues-feedback.component.html',
  styleUrl: './colleagues-feedback.component.scss',
})
export class ColleaguesFeedbackComponent implements OnInit {
  comments = [
    { description: 'Great team player!', name: 'John Doe' },
    { description: 'Very reliable and committed.', name: 'Jane Smith' },
    { description: 'Always helpful and positive.', name: 'Mark Johnson' },
    { description: 'Excellent problem-solving skills.', name: 'Emma Brown' }
  ];
  
  visibleCards: any[] = [];
  currentIndex: number = 0;
  totalCards: number;

  constructor() {
    this.totalCards = this.comments.length;
  }

  ngOnInit(): void {
    this.updateVisibleCards();
  }

  // Karten updaten
  updateVisibleCards(): void {
    this.visibleCards = [
      this.comments[this.getPreviousIndex()],
      this.comments[this.currentIndex],
      this.comments[this.getNextIndex()]
    ];
  }

  // Vorherige Karte
  prevCard(): void {
    this.currentIndex = this.getPreviousIndex();
    this.updateVisibleCards();
  }

  // Nächste Karte
  nextCard(): void {
    this.currentIndex = this.getNextIndex();
    this.updateVisibleCards();
  }

  // Hilfsmethoden, um den nächsten und vorherigen Index im Kreis zu berechnen
  getNextIndex(): number {
    return (this.currentIndex + 1) % this.totalCards;
  }

  getPreviousIndex(): number {
    return (this.currentIndex - 1 + this.totalCards) % this.totalCards;
  }
}

