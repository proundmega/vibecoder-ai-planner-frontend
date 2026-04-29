import { Route } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { KanbanComponent } from './kanban/kanban.component';

export const routes: Route[] = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'kanban',
    loadChildren: () => import('./kanban/kanban.routes').then((m) => m.routes),
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
];
