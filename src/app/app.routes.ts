import { Routes } from '@angular/router';
import { PageNotFoundComponent } from '../components/ui/page-not-found/page-not-found.component';
import { QnaComponent } from '../components/qna/qna.component';
import { HealthPlanComponent } from '../components/health-plan/health-plan.component';

export const routes: Routes = [
    {
      path: '',
      component: QnaComponent,
    },
    { path: 'health-plan', component: HealthPlanComponent },
    { path: 'page-not-found', component: PageNotFoundComponent },
    { path: '**', redirectTo: 'page-not-found' },
  ];