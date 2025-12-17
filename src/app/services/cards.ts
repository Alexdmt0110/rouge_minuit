import { Injectable } from '@angular/core';
import { Card, CARTES } from '../data/cards';

export type Niveau = 'chaud' | 'bouillant' | 'interdit' | 'rouge_total';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  private readonly niveauxOrdre: Niveau[] = ['chaud', 'bouillant', 'interdit', 'rouge_total'];

  private cartesDisponibles: Card[] = CARTES.filter(c => c.mode === 'duo');
  private cartesDejaTirees = new Set<Card>();

  private niveauIndex = 0;

  private totalParNiveau: Record<Niveau, { action: number; verite: number }> = {
    chaud: { action: 0, verite: 0 },
    bouillant: { action: 0, verite: 0 },
    interdit: { action: 0, verite: 0 },
    rouge_total: { action: 0, verite: 0 }
  };

  private compteParNiveau: Record<Niveau, { action: number; verite: number }> = {
    chaud: { action: 0, verite: 0 },
    bouillant: { action: 0, verite: 0 },
    interdit: { action: 0, verite: 0 },
    rouge_total: { action: 0, verite: 0 }
  };

  constructor() {
    // Calcule les totaux par niveau / type
    for (const carte of this.cartesDisponibles) {
      const n = carte.niveau as Niveau;
      this.totalParNiveau[n][carte.type]++;
    }

    // Ne garde que les niveaux qui ont au moins une carte
    const presents: Niveau[] = this.niveauxOrdre.filter(n =>
      this.totalParNiveau[n].action + this.totalParNiveau[n].verite > 0
    );
    this.niveauxOrdre.splice(0, this.niveauxOrdre.length, ...presents);
  }

  reset(): void {
    this.cartesDejaTirees.clear();
    this.niveauIndex = 0;

    (Object.keys(this.compteParNiveau) as Niveau[]).forEach(n => {
      this.compteParNiveau[n].action = 0;
      this.compteParNiveau[n].verite = 0;
    });
  }

  getNiveauActuel(): Niveau {
    return this.niveauxOrdre[this.niveauIndex];
  }

  getStatsNiveau(niveau: Niveau = this.getNiveauActuel()) {
    const total = this.totalParNiveau[niveau];
    const deja = this.compteParNiveau[niveau];

    return {
      totalAction: total.action,
      totalVerite: total.verite,
      dejaAction: deja.action,
      dejaVerite: deja.verite
    };
  }

  hasRemaining(type: 'action' | 'verite', niveau: Niveau = this.getNiveauActuel()): boolean {
    const stats = this.getStatsNiveau(niveau);
    if (type === 'action') {
      return stats.dejaAction < stats.totalAction;
    }
    return stats.dejaVerite < stats.totalVerite;
  }

  isNiveauComplet(niveau: Niveau = this.getNiveauActuel()): boolean {
    const s = this.getStatsNiveau(niveau);
    return s.dejaAction >= s.totalAction && s.dejaVerite >= s.totalVerite;
  }

  /**
   * Tire une carte pour le niveau actuel et le type demandé.
   * Retourne null si ce type est épuisé dans ce niveau.
   */
  tirerCarte(type: 'action' | 'verite'): Card | null {
    const niveau = this.getNiveauActuel();

    if (!this.hasRemaining(type, niveau)) {
      return null;
    }

    const dispo = this.cartesDisponibles.filter(c =>
      c.mode === 'duo' &&
      c.niveau === niveau &&
      c.type === type &&
      !this.cartesDejaTirees.has(c)
    );

    if (!dispo.length) {
      return null;
    }

    const i = Math.floor(Math.random() * dispo.length);
    const carte = dispo[i];

    this.cartesDejaTirees.add(carte);
    this.compteParNiveau[niveau][type]++;

    return carte;
  }

  /**
   * Passe au niveau suivant.
   * Retourne true si un niveau suivant existe, false sinon.
   */
  passerAuNiveauSuivant(): boolean {
    console.log('[CardsService] passerAuNiveauSuivant() AVANT', {
      niveauIndex: this.niveauIndex,
      niveauxOrdre: this.niveauxOrdre,
      niveauActuel: this.getNiveauActuel()
    });

    if (this.niveauIndex < this.niveauxOrdre.length - 1) {
      this.niveauIndex++;

      console.log('[CardsService] passerAuNiveauSuivant() APRES', {
        niveauIndex: this.niveauIndex,
        niveauActuel: this.getNiveauActuel()
      });

      return true;
    }

    console.log('[CardsService] passerAuNiveauSuivant() FIN (pas de suivant)');
    return false;
  }

}
