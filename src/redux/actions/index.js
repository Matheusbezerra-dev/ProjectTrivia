export const PLAYER = 'PLAYER';
export const SCORE = 'SCORE';
export const ASSERTIONS = 'ASSERTIONS';

export const playerInfo = (name, gravatarEmail) => ({
  type: PLAYER,
  name,
  gravatarEmail,
});

export const totalScore = (score) => ({
  type: SCORE,
  score,
});

export const scoreAssertions = (assertions) => ({
  type: ASSERTIONS,
  assertions,
});
