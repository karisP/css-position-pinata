import { instructions } from '../../data/instructions';
import styles from './Instructions.module.css';

type InstructionsProps = {
  currentStep: number;
  handleClickNext: () => void;
};

const Instructions = (props: InstructionsProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1>CSS Position Pinata 🎉 </h1>
        <span>{props.currentStep + 1}/16</span>
      </div>
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
