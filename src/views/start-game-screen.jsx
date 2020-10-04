import React from 'react';
import hand from '../imag/hand.png';
import Button from '../components/button';

const StartGame = ({ onStart }) => (
  <div className="start-screen">
    <div className="start-screen__wrap">
      <div className="start-screen__img-wrap">
        <img src={hand} alt="img" />
      </div>
      <div className="start-screen__content-wrap">
        <h1 className="start-screen__title">Who wants to be a millionaire?</h1>
        <div className="start-screen__button-wrap">
          <Button text="Start" changeStatus={onStart} />
        </div>
      </div>
    </div>
  </div>
);

export default StartGame;
