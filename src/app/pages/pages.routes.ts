import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExerciciosComponent } from './exercicios/exercicios.component';

export const PAGE_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'exercicios/:idTreino', component: ExerciciosComponent }
];
