import styles from "./Spinner.module.css";

function Spinner() {
  return (
    <div class={styles.spinner}>
      <div class={styles["bounce-1"]}></div>
      <div class={styles["bounce-2"]}></div>
      <div></div>
    </div>
  );
}

export default Spinner;
