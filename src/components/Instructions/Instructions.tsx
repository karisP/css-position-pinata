import React from 'react';
import styles from './Instructions.module.css';

type Instructions = {
  text: string;
  action: string | null;
};

type InstructionsProps = {
  currentStep: number;
  handleClickNext: () => void;
};

const Instructions = (props: InstructionsProps) => {
  const instructions: Instructions[] = [
    {
      text: 'You have been given a canvas to build the scenery for the party. Start by setting the canvas to position relative.',
      action: 'Next'
    },
    {
      text: 'Now we need to set the grass to the bottom of the screen using position fixed',
      action: 'Next'
    }
  ];

  return (
    <div className={styles.container}>
      <h1>CSS Position Pinata</h1>
      <p>
        Welcome to the Pinata Party! This game was created to help you
        understand and practice using the css position properties.
      </p>
      <ul>
        <li>
          <span className={styles.term}>relative</span>: relates to where it
          normally is. Most elements are positioned in the top left corner.
        </li>
        <li>
          <span className={styles.term}>absolute</span>: is positioned relative
          to the nearest positioned ancestor or the document body
        </li>
        <li>
          <span className={styles.term}>fixed</span>: positioned relative to the
          viewport, it will always stay in the same place
        </li>
        <li>
          <span className={styles.term}>sticky</span>: positioned based on the
          user's scroll position. If you scroll, it will stick with you.
        </li>
        <li>
          <span className={styles.term}>static</span>: elements are positioned
          static by default
        </li>
      </ul>
      <p>{instructions[props.currentStep].text}</p>
      <button onClick={props.handleClickNext}>Next</button>
    </div>
  );
};

export default Instructions;
