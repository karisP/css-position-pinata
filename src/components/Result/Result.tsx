import styles from './Result.module.css';

const Result = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.branch} ${styles.hidden}`}>branch</div>
      <div className={`${styles.sky} ${styles.hidden}`}>sky</div>
      <div className={`${styles.grass} ${styles.hidden}`}>grass</div>
      <span>canvas</span>
    </div>
  );
};

export default Result;
