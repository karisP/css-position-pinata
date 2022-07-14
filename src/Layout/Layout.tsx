import React from 'react';
import CodeEditor from '../components/CodeEditor';
import Instructions from '../components/Instructions';
import Result from '../components/Result';
import styles from './Layout.module.css';

const Layout = () => {
  const [currentStep, setCurrentStep] = React.useState<number>(0);

  const handleClickNext = () => {
    setCurrentStep(currentStep + 1);
  };

  return (
    <div className={styles.wrapper}>
      <Result currentStep={currentStep} />
      <div className={styles.container}>
        <Instructions
          currentStep={currentStep}
          handleClickNext={handleClickNext}
        />
        <CodeEditor
          currentStep={currentStep}
          handleClickNext={handleClickNext}
        />
      </div>
    </div>
  );
};

export default Layout;
