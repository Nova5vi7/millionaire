import React, { useState, useCallback, useMemo } from 'react';
import { connect } from 'react-redux';
import { FaBars, FaTimes } from 'react-icons/fa';
import questions from '../constants/questions';
import ReplyButton from '../components/reply-button';
import Score from '../components/score';
import getLetterByIndex from '../helpars/get-letter-by-index';
import action from '../store/actions';
import getRatesList from '../helpars/get-rates-list';
import goNextWithDelay from '../helpars/go-next-with-delay';

const Game = ({ gameOver, changeStep, step, currentQuestion }) => {
  const [mobileScoreVisible, setVisibility] = useState(false);

  const ratesList = useMemo(() => getRatesList(questions), []);

  const handleAnswer = useCallback(
    ({ currentTarget }, isTrue) => {
      if (!isTrue) {
        const rates = [0, ...ratesList];
        const currentScore = rates[step];
        goNextWithDelay(currentTarget, 'invalid', () => gameOver(currentScore));
        return;
      }

      const isLastStep = step === questions.length - 1;

      if (isLastStep) {
        goNextWithDelay(currentTarget, 'valid', () =>
          gameOver(ratesList[step]),
        );
      } else {
        goNextWithDelay(currentTarget, 'valid', changeStep);
      }
    },
    [changeStep, ratesList, gameOver, step],
  );

  const mobileScoreIsVisible = () => {
    if (mobileScoreVisible) {
      setVisibility(false);
    } else {
      setVisibility(true);
    }
  };

  return (
    <div className="game-screen">
      <div className="game-screen__content">
        <div className="game-screen__question">
          <h1 className="game-screen__title">{currentQuestion.text}</h1>
        </div>

        <div className="game-screen__answers">
          {currentQuestion.answers.map((itm, indx) => (
            <div className="game-screen__answers-wrap" key={indx}>
              <ReplyButton
                letter={getLetterByIndex(indx)}
                text={itm.text}
                onClick={(e) => handleAnswer(e, itm.value)}
                value={itm.value}
              />
            </div>
          ))}
        </div>
      </div>
      <div>
        <button
          type="button"
          className="score-visible"
          onClick={mobileScoreIsVisible}
        >
          {mobileScoreVisible ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <div
        className={
          mobileScoreVisible
            ? 'game-screen__score active'
            : 'game-screen__score'
        }
      >
        <Score ratesList={ratesList} currentStep={step} />
      </div>
    </div>
  );
};

const mapStateToProps = ({ step }) => ({
  currentQuestion: questions[step],
  step,
});

const mapDispatchToProps = (dispatch) => ({
  changeStep: () => {
    dispatch(action.goNextStep());
  },
  gameOver: (score) => {
    dispatch(action.setGameOver(score));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
