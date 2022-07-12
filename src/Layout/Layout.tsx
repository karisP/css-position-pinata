import CodeEditor from '../components/CodeEditor';
import Instructions from '../components/Instructions';
import Result from '../components/Result';
import styles from './Layout.module.css';

const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <Result />
      <div className={styles.container}>
        <Instructions />
        <CodeEditor />
      </div>
    </div>
  );
};

export default Layout;
