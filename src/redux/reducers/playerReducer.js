import { PLAYER, SCORE, ASSERTIONS } from '../actions';

const INITIAL_STATE = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
};

const player = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case PLAYER:
    return ({
      ...state,
      name: action.name,
      gravatarEmail: action.gravatarEmail,
    });
  case SCORE:
    return {
      ...state,
      score: action.score.scoreLocal,
    };
  case ASSERTIONS:
    return {
      ...state,
      assertions: action.assertions.corrects,
    };
  default:
    return state;
  }
};

export default player;
// alteracao pra fazer commit
