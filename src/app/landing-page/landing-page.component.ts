import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WelcomeAreaComponent } from '../welcome-area/welcome-area.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { SkillSetComponent } from '../skill-set/skill-set.component';
import { FeaturedProjectsComponent } from '../featured-projects/featured-projects.component';
import { ColleaguesFeedbackComponent } from '../colleagues-feedback/colleagues-feedback.component';
import { WorkTogetherComponent } from '../work-together/work-together.component';

@Component({
    selector: 'app-landing-page',
    imports: [
        CommonModule,
        WelcomeAreaComponent,
        AboutMeComponent,
        SkillSetComponent,
        FeaturedProjectsComponent,
        ColleaguesFeedbackComponent,
        WorkTogetherComponent,
    ],
    templateUrl: './landing-page.component.html',
    styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {}
