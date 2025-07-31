import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [CommonModule, TranslateModule, RouterLink],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss',
})
export class FooterComponent {
    scrollToTop(): void {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }
}
