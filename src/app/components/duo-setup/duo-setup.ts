import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-duo-setup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './duo-setup.html',
  styleUrls: ['./duo-setup.scss']
})
export class DuoSetupComponent {

  joueur1 = '';
  joueur2 = '';
  erreur = '';

  constructor(private router: Router) {}

  commencer() {
    this.erreur = '';

    const nom1 = this.joueur1.trim();
    const nom2 = this.joueur2.trim();

    if (!nom1 || !nom2) {
      this.erreur = 'Les deux prénoms sont obligatoires 😉';
      return;
    }

    if (nom1.toLowerCase() === nom2.toLowerCase()) {
      this.erreur = 'Choisissez deux prénoms différents pour que ce soit plus fun 🔥';
      return;
    }

    // On stocke pour la session de jeu
    const data = { joueurs: [nom1, nom2] };
    sessionStorage.setItem('rm_duo_joueurs', JSON.stringify(data));

    // Direction la page de jeu, mode duo
    this.router.navigate(['/game'], { queryParams: { mode: 'duo' } });
  }
}
