import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuizCountriesComponent } from './quiz-countries/quiz-countries.component';
import { QuizFlagsComponent } from './quiz-flags/quiz-flags.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },           // Page d'accueil
  { path: 'drapeaux', component: QuizFlagsComponent }, // Route pour le quiz des drapeaux
  { path: 'pays', component: QuizCountriesComponent }, // Route pour le quiz des pays
  { path: '**', redirectTo: '' }                    // Redirection par défaut
];

