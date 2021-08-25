import styles from "./Spinner.module.css";

function Spinner() {
  return (
    <div className={styles.spinner}>
      <div className={styles["bounce-1"]}></div>
      <div className={styles["bounce-2"]}></div>
      <div></div>
    </div>
  );
}

export default Spinner;
