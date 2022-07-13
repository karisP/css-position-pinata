import { ChangeEvent, useState } from 'react';
import { codeSnippets } from '../../data/codeSnippets';
import styles from './CodeEditor.module.css';

type CodeEditorProps = {
  currentStep: number;
  handleClickNext: () => void;
};

const CodeEditor = (props: CodeEditorProps) => {
  const [value, setValue] = useState<string | undefined>();

  const snippetClassNames = codeSnippets[props.currentStep].classNames;

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleOnSubmit = () => {
    if (props.currentStep < codeSnippets.length - 1) {
      if (value !== codeSnippets[props.currentStep].expected.trim()) {
        alert('try again');
      } else {
        props.handleClickNext();
        setValue('');
      }
    }
  };

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
        <>
          {snippetClassNames.map((c) => {
            return (
              <>
                <pre>.{c.class} &#123;</pre>
                {c.properties?.map((p, key) => {
                  return (
                    <pre className={styles.properties} key={key}>
                      {p}
                    </pre>
                  );
                })}
                {c.input ? (
                  <input onChange={(e) => handleOnChange(e)} value={value} />
                ) : undefined}
                <pre>&#125;</pre>
              </>
            );
          })}
        </>
      </div>
      <button onClick={handleOnSubmit} type="submit">
        Submit
      </button>
    </div>
  );
};

export default CodeEditor;
