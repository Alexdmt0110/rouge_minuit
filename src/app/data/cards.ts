export interface Card {
  type: 'action' | 'verite';
  niveau: 'chaud' | 'bouillant' | 'interdit' | 'rouge_total';
  mode: 'duo' | 'groupe';
  texte: string;
}

// NIVEAU CHAUD — DUO
export const CHAUD_DUO: Card[] = [

  // Actions
  { type: 'action', niveau: 'chaud', mode: 'duo', texte: 'Regarde ton/ta partenaire dans les yeux pendant 10 secondes… sans parler.' },
  { type: 'action', niveau: 'chaud', mode: 'duo', texte: 'Embrasse-le/la là où personne ne l’embrasse d’habitude (poignet, joue, clavicule…).' },
  { type: 'action', niveau: 'chaud', mode: 'duo', texte: 'Chuchote-lui un compliment vraiment sincère, mais un peu sensuel.' },
  { type: 'action', niveau: 'chaud', mode: 'duo', texte: 'Décris-lui une partie de son corps que tu trouves magnifique… en la frôlant du bout des doigts.' },
  { type: 'action', niveau: 'chaud', mode: 'duo', texte: 'Approche ton visage du sien jusqu’à ce que vos lèvres se frôlent… mais n’embrasse pas.' },

  // Vérités
  { type: 'verite', niveau: 'chaud', mode: 'duo', texte: 'Quelle est la partie de mon corps que tu remarques en premier ?' },
  { type: 'verite', niveau: 'chaud', mode: 'duo', texte: 'Est-ce que tu me trouves physiquement attirant(e)… vraiment ?' },
  { type: 'verite', niveau: 'chaud', mode: 'duo', texte: 'Quel type de baiser te fait perdre tous tes moyens ?' },
  { type: 'verite', niveau: 'chaud', mode: 'duo', texte: 'Quelle tenue te donne envie de me regarder autrement ?' },
  { type: 'verite', niveau: 'chaud', mode: 'duo', texte: 'As-tu déjà eu un petit fantasme… juste en me regardant ?' }

];

// NIVEAU BOUILLANT — DUO
export const BOUILLANT_DUO: Card[] = [

  // Actions
  { type: 'action', niveau: 'bouillant', mode: 'duo', texte: 'Embrasse lentement le cou ou la nuque de ton/ta partenaire.' },
  { type: 'action', niveau: 'bouillant', mode: 'duo', texte: 'Fais glisser ta main sous son t-shirt et caresse son torse ou son ventre.' },
  { type: 'action', niveau: 'bouillant', mode: 'duo', texte: 'Assieds-toi contre lui/elle et laisse-le/la toucher une zone sensible (non sexuelle).' },
  { type: 'action', niveau: 'bouillant', mode: 'duo', texte: 'Guide ses mains jusqu’à un endroit où tu veux être caressé(e).' },
  { type: 'action', niveau: 'bouillant', mode: 'duo', texte: 'Décris-lui comment tu aimes être embrassé(e)… puis laissez-le/la essayer.' },

  // Vérités
  { type: 'verite', niveau: 'bouillant', mode: 'duo', texte: 'Où aimes-tu qu’on te touche quand tu veux plus ?' },
  { type: 'verite', niveau: 'bouillant', mode: 'duo', texte: 'Préfères-tu mener… ou te laisser faire ?' },
  { type: 'verite', niveau: 'bouillant', mode: 'duo', texte: 'Quel fantasme sensuel tu n’as jamais avoué ?' },
  { type: 'verite', niveau: 'bouillant', mode: 'duo', texte: 'Quel type de caresse te fait perdre pied ?' },
  { type: 'verite', niveau: 'bouillant', mode: 'duo', texte: 'Qu’est-ce qui te met vraiment en condition : les mots, les gestes, ou les regards ?' }

];

// NIVEAU INTERDIT — DUO
export const INTERDIT_DUO: Card[] = [

  // Actions
  { type: 'action', niveau: 'interdit', mode: 'duo', texte: 'Stimule son sexe à travers ses vêtements pendant 10 secondes.' },
  { type: 'action', niveau: 'interdit', mode: 'duo', texte: 'Laisse-le/la te déshabiller d’un vêtement… lentement.' },
  { type: 'action', niveau: 'interdit', mode: 'duo', texte: 'Mets-toi sur lui/elle et mime une position sexuelle.' },
  { type: 'action', niveau: 'interdit', mode: 'duo', texte: 'Fais-lui une caresse intime sous les vêtements, si l’autre est d’accord.' },
  { type: 'action', niveau: 'interdit', mode: 'duo', texte: 'Chuchote-lui exactement ce que tu veux qu’il/elle te fasse.' },

  // Vérités
  { type: 'verite', niveau: 'interdit', mode: 'duo', texte: 'Quelle pratique sexuelle te donne le plus de plaisir ?' },
  { type: 'verite', niveau: 'interdit', mode: 'duo', texte: 'As-tu déjà eu un orgasme uniquement grâce à des caresses ?' },
  { type: 'verite', niveau: 'interdit', mode: 'duo', texte: 'Quelle est ta position préférée, et pourquoi ?' },
  { type: 'verite', niveau: 'interdit', mode: 'duo', texte: 'Aimes-tu être dominé(e), dominant(e)… ou les deux selon l’humeur ?' },
  { type: 'verite', niveau: 'interdit', mode: 'duo', texte: 'Quelle est la limite la plus chaude que tu serais prêt(e) à dépasser ce soir ?' }

];

// NIVEAU ROUGE TOTAL — DUO
export const ROUGE_TOTAL_DUO: Card[] = [

  // Actions
  { type: 'action', niveau: 'rouge_total', mode: 'duo', texte: 'Pénètre ton/ta partenaire (ou laisse-toi pénétrer) et suis un rythme : lent → rapide → pause.' },
  { type: 'action', niveau: 'rouge_total', mode: 'duo', texte: 'Choisis une position et impose-la pendant 30 secondes.' },
  { type: 'action', niveau: 'rouge_total', mode: 'duo', texte: 'Stimule ton/ta partenaire jusqu’à ce qu’il/elle soit à deux doigts de jouir… puis arrête.' },
  { type: 'action', niveau: 'rouge_total', mode: 'duo', texte: 'Enchaînez trois positions que tu choisis toi-même.' },
  { type: 'action', niveau: 'rouge_total', mode: 'duo', texte: 'Fais-lui jouir avec ta bouche, ta main ou ton sexe — à lui/elle de décider comment.' },

  // Vérités
  { type: 'verite', niveau: 'rouge_total', mode: 'duo', texte: 'Quel type d’orgasme te fait perdre totalement le contrôle ?' },
  { type: 'verite', niveau: 'rouge_total', mode: 'duo', texte: 'Si tu devais décrire ton rapport sexuel parfait en trois étapes, ce serait quoi ?' },
  { type: 'verite', niveau: 'rouge_total', mode: 'duo', texte: 'Quelle est la position dans laquelle tu prends le plus ton pied ?' },
  { type: 'verite', niveau: 'rouge_total', mode: 'duo', texte: 'Préfères-tu jouir en même temps ou séparément ?' },
  { type: 'verite', niveau: 'rouge_total', mode: 'duo', texte: 'Quel est le plus grand fantasme sexuel que tu n’as encore jamais vécu ?' }

];

export const CARTES: Card[] = [
  ...CHAUD_DUO,
  ...BOUILLANT_DUO,
  ...INTERDIT_DUO,
  ...ROUGE_TOTAL_DUO
];
