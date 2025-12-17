import { Routes } from '@angular/router';
import { GameComponent } from './components/game/game';
import { HomeComponent } from './components/home/home';
import { DuoSetupComponent } from './components/duo-setup/duo-setup';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'game', component: GameComponent},
  {path: 'duo', component: DuoSetupComponent},
  {path: '**', redirectTo: ''}
];
