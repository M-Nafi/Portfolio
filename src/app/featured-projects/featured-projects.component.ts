import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-featured-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './featured-projects.component.html',
  styleUrls: ['./featured-projects.component.scss']
})
export class FeaturedProjectsComponent {
  imageSource: string = './../../assets/img/close-icon-white.png';
  changeImage(newImage:string): void {
    this.imageSource = newImage;
  }

  activeImage: string | null = null;
  
  showImage(project: string) {
    this.activeImage = project;
  }
 
  hideImage() {
    this.activeImage = null;
  }
}
