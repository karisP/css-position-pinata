import styles from "./Instructions.module.css";

const Instructions = () => {
  return (
    <div className={styles.container}>
      <h1>CSS Position Pinata</h1>
      <p>
        Welcome to the Pinata Party! This game was created to help you
        understand and practice using the css position properties.
      </p>
      <ul>
        <li>
          relative: relates to where it normally is. Most elements are
          positioned in the top left corner.
        </li>
        <li>
          absolute: is positioned relative to the nearest positioned ancestor or
          the document body
        </li>
        <li>
          fixed: positioned relative to the viewport, it will always stay in the
          same place
        </li>
        <li>
          sticky: positioned based on the user's scroll position. If you scroll,
          it will stick with you.
        </li>
        <li>static: elements are positioned static by default</li>
      </ul>
      <p>Some directions about the next steps.</p>
    </div>
  );
};

export default Instructions;
