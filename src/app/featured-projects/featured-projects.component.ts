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

  changeImage(newImage: string): void {
    this.imageSource = newImage;
  }

  activeImage: string | null = null;

  showImage(project: string) {
    this.activeImage = project;
  }

  hideImage() {
    this.activeImage = null;
  }

  isProjectVisible = false;
  selectedProject: any;
  currentIndex = 0;

  showProjectDetails(project: any) {
    this.selectedProject = project; 
    this.isProjectVisible = true;   
  }

  hideProjectDetails(event: Event) {
    event.stopPropagation();
    this.isProjectVisible = false; 
  }

  nextProject() {
    // Increment the current index and reset to 0 if at the last project
    this.currentIndex = (this.currentIndex + 1) % this.projects.length;
    this.selectedProject = this.projects[this.currentIndex];
  }

  projects = [
    {
      number: '01',
      title: 'Join',
      subtitle: 'Task Manager Application',
      githubUrl: 'https://github.com/MarcoAngermann/join-project',
      livetestUrl: 'https://marco-angermann.developerakademie.net/join/',
      description: 'A task manager inspired by the Kanban system...',
      technologies: [
        { iconUrl: '../../assets/img/javascript-icon-colored.png' },
        { iconUrl: '../../assets/img/html-icon-colored.png' },
        { iconUrl: '../../assets/img/css-icon-colored.png' },
        // { iconUrl: '../../assets/img/firebasegreen.svg' }
      ],
      imageUrl: '../../assets/img/Photo.png',
      // infoUrl: '../../assets/img/joinbig.png'
    },
    {
      number: '02',
      title: 'El Pollo Loco',
      githubUrl: 'https://github.com/MarcoAngermann/el-pollo-loco',
      livetestUrl: 'https://marco-angermann.developerakademie.net/el-pollo-loco/',
      subtitle: 'Jump-and-Run Game',
      description: 'A fun jump-and-run game...',
      technologies: [
        { iconUrl: '../../assets/img/html-icon-colored.png' },
        { iconUrl: '../../assets/img/css-icon-colored.png' },
        { iconUrl: '../../assets/img/javascript-icon-colored.png' }
      ],
      imageUrl: '../../assets/img/Photo.png',
      // infoUrl: '../../assets/img/elpollobig.png'
    },
    {
      number: '03',
      title: 'DA Bubble',
      githubUrl: 'https://github.com/MarcoAngermann/DA-Bubble',
      livetestUrl: 'https://da-bubble.netlify.app/',
      subtitle: 'Messaging Application',
      description: 'A messaging app built with Angular...',
      technologies: [
        { iconUrl: '../../assets/img/html-icon-colored.png' },
        { iconUrl: '../../assets/img/css-icon-colored.png' },
        { iconUrl: '../../assets/img/javascript-icon-colored.png' }
        // { iconUrl: '../../assets/img/angulargreen.svg' },
        // { iconUrl: '../../assets/img/typescriptgreen.svg' },
        // { iconUrl: '../../assets/img/htmlgreen.svg' },
        // { iconUrl: '../../assets/img/cssgreen.svg' },
        // { iconUrl: '../../assets/img/firebasegreen.svg' }
      ],
      imageUrl: '../../assets/img/Photo.png',
      // infoUrl: '../../assets/img/dabubblebig.png'
    }
  ];
}

