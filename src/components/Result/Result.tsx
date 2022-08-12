import styles from './Result.module.css';
import { results } from '../../data/results';

type ResultProps = {
  currentStep: number;
};

const Result = (props: ResultProps) => {
  const containerClass = results[props.currentStep].container;
  const branchClass = results[props.currentStep].branch;
  const treeClass = results[props.currentStep].tree;
  const skyClass = results[props.currentStep].sky;
  const grassClass = results[props.currentStep].grass;

  return (
    <div className={`${styles.container} ${styles[`${containerClass}`]}`}>
      <div className={`${styles.branch} ${styles[`${branchClass}`]}`}>
        branch
      </div>
      <div className={`${styles.sky} ${styles[`${skyClass}`]}`}>sky</div>
      <div className={`${styles.tree} ${styles[`${treeClass}`]}`}>tree</div>
      <div className={`${styles.grass} ${styles[`${grassClass}`]}`}>grass</div>
      <span>canvas</span>
    </div>
  );
};

export default Result;
