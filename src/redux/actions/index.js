export const PLAYER = 'PLAYER';

export const playerInfo = (name, gravatarEmail) => ({
  type: PLAYER,
  name,
  gravatarEmail,
});

export const SCORE = 'SCORE';

export const totalScore = (score) => ({
  type: SCORE,
  score,
});
