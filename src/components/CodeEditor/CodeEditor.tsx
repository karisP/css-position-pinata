import styles from './CodeEditor.module.css';

const CodeEditor = () => {
  return (
    <div className={styles.container}>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
      </ul>
      <div className={styles.syntax}>
        <pre>
          #parent &#123; <br /> position: relative;
        </pre>
        <textarea></textarea>
        <pre>&#125;</pre>
      </div>
      <button>Submit</button>
    </div>
  );
};

export default CodeEditor;
