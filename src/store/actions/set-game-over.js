import actionTypes from './action-types';

const setGameOver = (score) => ({
  type: actionTypes.GAME_OVER,
  payload: {
    score,
  },
});

export default setGameOver;
