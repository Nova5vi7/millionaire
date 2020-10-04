import React from 'react';
import hand from '../imag/hand.png';
import Button from '../components/button';

const GameOver = ({ onStart, score }) => (
  <div className="over-screen">
    <div className="over-screen__wrap">
      <div className="over-screen__img-wrap">
        <img src={hand} alt="img" />
      </div>
      <div className="over-screen__content-wrap">
        <div className="over-screen__score">Total score:</div>
        <h1 className="over-screen__title">{`$${score}`} earned</h1>
        <div className="over-screen__button-wrap">
          <Button text="Try again" changeStatus={onStart} />
        </div>
      </div>
    </div>
  </div>
);

export default GameOver;
