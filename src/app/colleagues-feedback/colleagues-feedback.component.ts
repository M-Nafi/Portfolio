import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-colleagues-feedback',
  standalone: true,
  imports: [CommonModule, TranslateModule],
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
  visibleCards: { name: string; description: string }[] = [];

  constructor() {
    this.updateVisibleCards();
  }

  animateSlide(direction: string) {
    let cardContainer = this.cardContainerRef.nativeElement;        
    let shiftAmount = direction === 'next' ? '33.33%' : '-33.33%';  
    
    cardContainer.style.transition = 'none';    
    cardContainer.style.transform = `translateX(${shiftAmount})`;      
    
    setTimeout(() => {      
      cardContainer.style.transition = 'transform 0.5s ease-in-out';
      cardContainer.style.transform = 'translateX(0)';      
      if (direction === 'next') {
        this.currentIndex = (this.currentIndex + 1) % this.comments.length;
      } else {
        this.currentIndex = (this.currentIndex - 1 + this.comments.length) % this.comments.length;
      }           
    }, 50);
    this.updateVisibleCards();
  }
  
  updateVisibleCards() {
    let nextIndex = (this.currentIndex + 1) % this.comments.length;
    let prevIndex = (this.currentIndex - 1 + this.comments.length) % this.comments.length;  
   
    this.visibleCards = [
      this.comments[prevIndex],  
      this.comments[this.currentIndex], 
      this.comments[nextIndex]    
    ];
  }  
  
  nextCard() {
    this.animateSlide('next');
  }
  
  prevCard() {
    this.animateSlide('prev');
  }
} 