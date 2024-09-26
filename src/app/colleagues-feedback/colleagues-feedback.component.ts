import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-colleagues-feedback',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './colleagues-feedback.component.html',
  styleUrls: ['./colleagues-feedback.component.scss'],
})
export class ColleaguesFeedbackComponent {
  @ViewChild('cardContainer') cardContainerRef!: ElementRef;
  comments: { name: string; description: string }[] = [
    {
      description: 'Great team player!',
      name: 'John Doe',
    },
    {
      description: 'Very reliable and committed.',
      name: 'Jane Smith',
    },
    {
      description: 'Always helpful and positive.',
      name: 'Mark Johnson',
    },
  ];

  currentIndex = 0;
  visibleCards: any = [];

  constructor() {
    this.updateVisibleCards();
  }

  updateVisibleCards() {
    this.visibleCards = this.comments.slice(
      this.currentIndex,
      this.currentIndex + 3
    );
    if (this.visibleCards.length < 3) {
      this.visibleCards = this.visibleCards.concat(
        this.comments.slice(0, 3 - this.visibleCards.length)
      );
    }
  }

  nextCard() {
    this.animateSlide('next');
    this.currentIndex = (this.currentIndex + 1) % this.comments.length;
    setTimeout(() => {
      this.updateVisibleCards();
    }, 500);
  }
  
  prevCard() {
    this.animateSlide('prev');
    this.currentIndex = (this.currentIndex - 1 + this.comments.length) % this.comments.length;
    setTimeout(() => {
      this.updateVisibleCards();
    }, 500);
  }  

  animateSlide(direction: string) {
    const cardContainer = this.cardContainerRef.nativeElement; // Zugriff auf das DOM-Element

    if (direction === 'next') {
      cardContainer.style.transform = 'translateX(-33.33%)';
    } else if (direction === 'prev') {
      cardContainer.style.transform = 'translateX(33.33%)';
    }

    setTimeout(() => {
      cardContainer.style.transition = 'none';
      cardContainer.style.transform = 'translateX(0)';

      setTimeout(() => {
        cardContainer.style.transition = 'transform 0.5s ease-in-out';
      }, 50);
    }, 500);
  }
}