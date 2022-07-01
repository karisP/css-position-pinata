import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <div>Result</div>
      <div className={styles.container}>
        <div>Instructions</div>
        <div>Code Editor</div>
      </div>
    </div>
  );
};

export default Layout;
