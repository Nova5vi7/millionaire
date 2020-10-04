import React from 'react';

const ReplyButton = ({ letter, text, onClick, value }) => (
  <button type="button" className="reply-button">
    <svg
      onClick={onClick}
      viewBox="0 0 405 72"
      className="reply-button__wrap"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      value={value}
    >
      <path
        d="M38.7172 5.28344C40.8781 2.28016 44.3521 0.5 48.052 0.5H356.948C360.648 0.5 364.122 2.28016 366.283 5.28344L388.384 36L366.283 66.7166C364.122 69.7198 360.648 71.5 356.948 71.5H48.052C44.3521 71.5 40.8781 69.7198 38.7172 66.7166L16.616 36L38.7172 5.28344Z"
        fill="white"
        className="reply-border reply-overlay"
      />
      <path d="M388 36H405" className="reply-border" />
      <path d="M0 36H17" className="reply-border" />
      <text fill="#FF8B37" className="reply-letter">
        <tspan x="45.7637" y="43.7727">
          {letter}
        </tspan>
      </text>
      <text fill="#1C1C21" className="reply-text">
        <tspan x="71" y="43.7727">
          {text}
        </tspan>
      </text>
    </svg>
  </button>
);

export default ReplyButton;
