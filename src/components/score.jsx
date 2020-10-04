import React from 'react';
import RateScore from './rate-score';

function Score({ ratesList, currentStep }) {
  return (
    <div className="score">
      <div className="score__wrap">
        {ratesList.map((rate, index) => (
          <div className="score__wrap-svg" key={rate}>
            <RateScore
              text={`$${rate}`}
              isActive={currentStep === index}
              passed={currentStep > index}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Score;
