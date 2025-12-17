import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CardsService, Niveau } from '../../services/cards';
import { Card } from '../../data/cards';

type Phase = 'choix' | 'carte' | 'transition' | 'fin';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './game.html',
  styleUrls: ['./game.scss']
})
export class GameComponent implements OnInit {
  joueurs: string[] = [];
  indexJoueurActuel = 0;

  phase: Phase = 'choix';
  carteCourante: Card | null = null;
  typeChoisi: 'action' | 'verite' | null = null;

  transitionMessage = '';

  isTransitioningBackground = false;

  protected transitionEnCours = false;

  constructor(private cardsService: CardsService) {}

  ngOnInit(): void {
    const raw = sessionStorage.getItem('rm_duo_joueurs');
    this.joueurs = raw ? JSON.parse(raw).joueurs : ['Joueur 1', 'Joueur 2'];
    this.cardsService.reset();
  }

  get joueurActuel(): string {
    return this.joueurs[this.indexJoueurActuel];
  }

  get niveauActuel(): Niveau {
    return this.cardsService.getNiveauActuel();
  }

  peutChoisir(type: 'action' | 'verite'): boolean {
    return this.cardsService.hasRemaining(type);
  }

  choisirType(type: 'action' | 'verite'): void {
    if (!this.peutChoisir(type)) return;

    this.typeChoisi = type;

    const carte = this.cardsService.tirerCarte(type);
    if (!carte) return;

    this.carteCourante = carte;
    this.phase = 'carte';
  }

  tourSuivant(): void {
    this.carteCourante = null;
    this.typeChoisi = null;

    // joueur suivant
    this.indexJoueurActuel =
      (this.indexJoueurActuel + 1) % this.joueurs.length;

    if (this.cardsService.isNiveauComplet()) {

      const niveau = this.cardsService.getNiveauActuel();

      if (niveau === 'rouge_total') {
        this.transitionMessage = this.getFinMessage();
        this.phase = 'fin';
        return;
      }

      this.transitionMessage = this.getTransitionMessageNiveau();
      this.phase = 'transition';
      return;
    }

    // sinon on continue normalement
    this.phase = 'choix';
  }

  continuerApresTransition(event?: Event): void {
    if (this.phase !== 'transition') return;
    if (this.transitionEnCours) return;

    event?.preventDefault();
    event?.stopPropagation();

    this.transitionEnCours = true;

    const ok = this.cardsService.passerAuNiveauSuivant();

    if (!ok) {
      this.transitionMessage = this.getFinMessage();
      this.phase = 'fin';
      this.transitionEnCours = false;
      return;
    }

    this.isTransitioningBackground = true;

    this.phase = 'choix';

    // 🔥 3. on termine le fondu
    setTimeout(() => {
      this.isTransitioningBackground = false;
      this.transitionEnCours = false;
    }, 900);
  }


  /** Phrase quand on termine un niveau */
  private getTransitionMessageNiveau(): string {
    const niveau = this.cardsService.getNiveauActuel();

    switch (niveau) {
      case 'chaud':
        return 'Vous avez réveillé la flamme… prêts à monter d’un cran ? 🔥';
      case 'bouillant':
        return 'Les choses deviennent sérieuses… explorez-vous encore plus intensément. 💋';
      case 'interdit':
        return 'Vous avez franchi toutes les limites… il reste le dernier niveau. 🔞';
      default:
        return '';
    }
  }

  /** Phrase finale */
  private getFinMessage(): string {
    return 'Plus aucune carte ne peut vous arrêter maintenant… amusez-vous bien. 🫣';
  }
}
