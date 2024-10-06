import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PolicyComponent } from '../policy/policy.component';

@Component({
  selector: 'app-work-together',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterLink, PolicyComponent],
  templateUrl: './work-together.component.html',
  styleUrl: './work-together.component.scss'
})
export class WorkTogetherComponent {

}
