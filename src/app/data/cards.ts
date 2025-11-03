export interface Card {
  type: 'action' | 'verite';
  niveau: 'chaud' | 'bouillant' | 'interdit';
  mode: 'duo' | 'groupe';
  texte: string;
}

export const CARTES: Card[] = [
  // Niveau Bouillant – Duo
  { type: 'verite', niveau: 'bouillant', mode: 'duo', texte: 'Tu aimes être dominée ou dominante ?' },
  { type: 'verite', niveau: 'bouillant', mode: 'duo', texte: 'Tu as déjà été attaché(e) ?' },
  { type: 'verite', niveau: 'bouillant', mode: 'duo', texte: 'Tu aimes le BDSM soft ?' },
  { type: 'verite', niveau: 'bouillant', mode: 'duo', texte: 'Tu as des sex toys ? Lequel préfères-tu ?' },

  // Niveau Interdit – Duo
  { type: 'action', niveau: 'interdit', mode: 'duo', texte: 'Attache tes poignets et laisse ton/ta partenaire t’explorer.' },
  { type: 'action', niveau: 'interdit', mode: 'duo', texte: 'Montre ton sex toy préféré (s’il est là) et décris comment tu l’utilises.' },
  { type: 'verite', niveau: 'interdit', mode: 'duo', texte: 'Tu aimes être soumise ? Prouve-le.' }
];
