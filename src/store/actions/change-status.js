import actionTypes from './action-types';

const changeStatus = (status) => ({
  type: actionTypes.CHANGE_STATUS,
  payload: {
    status,
  },
});

export default changeStatus;
