import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-featured-projects',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './featured-projects.component.html',
  styleUrls: ['./featured-projects.component.scss'],
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
    this.currentIndex = (this.currentIndex + 1) % this.projects.length;
    this.selectedProject = this.projects[this.currentIndex];
  }

  projects = [
    {
      number: '01',
      title: 'Join',
      subtitle: 'What is this project about?',
      githubUrl: '',
      livetestUrl: '',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
      technologies: 
      [
        { iconUrl: '../../assets/img/javascript-icon-colored.png', name: 'Javascript'},
        { iconUrl: '../../assets/img/html-icon-colored.png', name: 'HTML' },
        { iconUrl: '../../assets/img/css-icon-colored.png', name: 'CSS' }
      ],
      imageUrl: '../../assets/img/Photo.png'
    },
    {
      number: '02',
      title: 'El Pollo Loco',
      subtitle: 'What is this project about?',
      githubUrl: '',
      livetestUrl: '',      
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      technologies: 
      [
        { iconUrl: '../../assets/img/html-icon-colored.png', name: 'HTML' },
        { iconUrl: '../../assets/img/css-icon-colored.png', name: 'CSS' },
        { iconUrl: '../../assets/img/javascript-icon-colored.png', name: 'Javascript' }
      ],
      imageUrl: '../../assets/img/Photo.png'    
    },
    {
      number: '03',
      title: 'DA Bubble',
      subtitle: 'What is this project about?',
      githubUrl: '',
      livetestUrl: '',      
      description: 'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
      technologies: 
      [
        { iconUrl: '../../assets/img/html-icon-colored.png', name: 'HTML' },
        { iconUrl: '../../assets/img/css-icon-colored.png', name: 'CSS' },
        { iconUrl: '../../assets/img/javascript-icon-colored.png', name: 'Javascript' }
      ],
      imageUrl: '../../assets/img/Photo.png'      
    },
  ];
}
