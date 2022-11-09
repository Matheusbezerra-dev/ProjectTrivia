export const PLAYER = 'PLAYER';

export const playerInfo = (name, gravatarEmail) => ({
  type: PLAYER,
  name,
  gravatarEmail,
});
