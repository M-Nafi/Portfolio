import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LegalNoticeComponent } from '../../legal-notice/legal-notice.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterLink, LegalNoticeComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
