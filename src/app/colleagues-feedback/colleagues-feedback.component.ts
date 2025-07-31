import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-colleagues-feedback',
    standalone: true,
    imports: [CommonModule, TranslateModule],
    templateUrl: './colleagues-feedback.component.html',
    styleUrls: ['./colleagues-feedback.component.scss'],
})
export class ColleaguesFeedbackComponent {
    comments: { name: string; description: string }[] = [
        { name: 'Maximilian Lackmann', description: 'test' },
        { name: 'Marco Angermann', description: 'test' },
        { name: 'Lukas Nolting', description: 'test' },
        { name: 'Maximilian Lackmann', description: 'test' },
        { name: 'Marco Angermann', description: 'test' },
        { name: 'Lukas Nolting', description: 'test' },
    ];

    currentIndex = 0;
    visibleCards: any = [];
    dotAnimationState: boolean[] = [];
    animationDirection: 'next' | 'prev' = 'next';

    constructor(public translateService: TranslateService) {
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
        this.animationDirection = 'next';
        this.animateSlide('next');
        setTimeout(() => {
            this.currentIndex = (this.currentIndex + 1) % this.comments.length;
            this.updateVisibleCards();
        }, 500);
    }

    prevCard() {
        this.animationDirection = 'prev';
        this.animateSlide('prev');
        setTimeout(() => {
            this.currentIndex =
                (this.currentIndex - 1 + this.comments.length) %
                this.comments.length;
            this.updateVisibleCards();
        }, 500);
    }

    animateSlide(direction: string) {
        const cardContainer = document.querySelector(
            '.card-container'
        ) as HTMLElement;
        if (direction === 'next') {
            cardContainer.style.transform = 'translateX(-33.33%)';
        } else {
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
