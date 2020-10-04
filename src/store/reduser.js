import actionTypes from './actions/action-types';
import statuses from '../constants/statuses';

const reduser = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_STATUS:
      return {
        ...state,
        status: action.payload.status,
      };

    case actionTypes.NEXT_STEP:
      return {
        ...state,
        step: state.step + 1,
      };

    case actionTypes.GAME_OVER:
      return {
        ...state,
        status: statuses.FINISH,
        step: 0,
        score: action.payload.score,
      };

    default:
      return state;
  }
};

export default reduser;
