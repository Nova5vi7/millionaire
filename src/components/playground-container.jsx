import React from 'react';
import { connect } from 'react-redux';
import statuses from '../constants/statuses';
import StartGame from '../views/start-game-screen';
import Game from '../views/game-screen';
import GameOver from '../views/game-over-screen';
import action from '../store/actions';

function PlaygroundContainer({ status, startGame, score }) {
  if (status === statuses.PLAYING) {
    return <Game />;
  }
  if (status === statuses.FINISH) {
    return <GameOver onStart={startGame} score={score} />;
  }

  return <StartGame onStart={startGame} />;
}

const mapStateToProps = ({ status, score }) => ({
  status,
  score,
});

const mapDispatchToProps = (dispatch) => ({
  startGame: () => {
    dispatch(action.changeStatus(statuses.PLAYING));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlaygroundContainer);
