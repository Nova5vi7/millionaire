import React from 'react';

const SumButton = ({ text, isActive, passed }) => (
  <svg
    width="376"
    height="40"
    viewBox="0 0 376 40"
    className="sum-button"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M69 20H0"
      className="sum-border sum-overlay"
      style={{ stroke: isActive ? '#ff8b37' : '#d0d0d8' }}
    />
    <path
      d="M376 20H307"
      className="sum-border sum-overlay"
      style={{ stroke: isActive ? '#ff8b37' : '#d0d0d8' }}
    />
    <path
      d="M81.4526 4.63788C83.6376 2.01596 86.8742 0.5 90.2872 0.5H285.713C289.126 0.5 292.362 2.01597 294.547 4.63788L307.349 20L294.547 35.3621C292.362 37.984 289.126 39.5 285.713 39.5H90.2872C86.8742 39.5 83.6376 37.984 81.4526 35.3621L68.6509 20L81.4526 4.63788Z"
      fill="white"
      style={{ stroke: isActive ? '#ff8b37' : '#d0d0d8' }}
      className="sum-border sum-overlay"
    />

    <text
      fill={isActive ? '#ff8b37' : !passed ? '#000000' : '#d0d0d8'}
      className="sum-button-text"
    >
      <tspan x="149.777" y="26.7727">
        {text}
      </tspan>
    </text>
  </svg>
);

export default SumButton;
