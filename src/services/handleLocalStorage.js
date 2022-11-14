export const tokenStorage = (param) => {
  localStorage.setItem('token', param);
};

export const playerStorage = (player) => {
  localStorage.setItem('players', JSON.stringify(player));
};

export const getStorage = () => {
  const obj = localStorage.getItem('players');
  return JSON.parse(obj);
};
