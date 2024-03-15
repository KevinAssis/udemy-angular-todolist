import { Routes } from '@angular/router';

// Pages
import { ListComponent } from './modules/todolist/pages/list/list.component';

export const routes: Routes = [
  {
    path: '',
    component: ListComponent,
  },
  {
    path: 'browser',
    component: ListComponent,
  },
];
