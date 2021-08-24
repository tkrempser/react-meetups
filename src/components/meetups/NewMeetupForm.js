import styles from "./NewMeetupForm.module.css";
import Card from "../layout/Card";

function NewMeetupForm(props) {
  return (
    <Card>
      <form className={styles.form}>
        <div className={styles.control}>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" required />
        </div>
        <div className={styles.control}>
          <label htmlFor="image">Image</label>
          <input type="url" id="image" required />
        </div>
        <div className={styles.control}>
          <label htmlFor="address">Address</label>
          <input type="text" id="address" required />
        </div>
        <div className={styles.control}>
          <label htmlFor="description">Description</label>
          <textarea id="description" rows="5" required />
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
