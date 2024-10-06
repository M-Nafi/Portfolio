import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PolicyComponent } from './policy/policy.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'policy', component: PolicyComponent },
    { path: 'legal-notice', component: LegalNoticeComponent }
];
