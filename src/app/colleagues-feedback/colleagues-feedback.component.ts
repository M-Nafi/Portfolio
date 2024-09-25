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
    { 
      description: 'Great team player!', 
      name: 'John Doe'
    },
    { 
      description: 'Very reliable and committed.', 
      name: 'Jane Smith' 
    },
    { 
      description: 'Always helpful and positive.', 
      name: 'Mark Johnson' 
    }
  ];
  
  visibleCards: any[] = [];
  currentIndex: number = 0;  
  totalCards: number;

  constructor() {
    this.totalCards = this.comments.length;
  }

  ngOnInit(): void {
    // this.currentIndex = 0; 
    // this.currentIndex = Math.floor(this.totalCards / 2);
    this.updateVisibleCards();
  }

  updateVisibleCards(): void {
    let previousIndex = this.getPreviousIndex();
    let nextIndex = this.getNextIndex();
    
    this.visibleCards = [
      { ...this.comments[previousIndex], class: 'previous', anim: 'slideOut' },
      { ...this.comments[this.currentIndex], class: 'active', anim: 'slideIn' },
      { ...this.comments[nextIndex], class: 'next', anim: 'slideIn' }
    ];
  }
  

  prevCard(): void {
    this.currentIndex = this.getPreviousIndex();
    this.updateVisibleCards();
  }

  nextCard(): void {
    this.currentIndex = this.getNextIndex();
    this.updateVisibleCards();
  }

  getNextIndex(): number {
    return (this.currentIndex + 1) % this.totalCards;
  }

  getPreviousIndex(): number {
    return (this.currentIndex - 1 + this.totalCards) % this.totalCards;
  }
}