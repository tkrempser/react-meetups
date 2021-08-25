import { useRef } from "react";

import styles from "./NewMeetupForm.module.css";
import Card from "../layout/Card";

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const meetupTitle = titleInputRef.current.value;
    const meetupImage = imageInputRef.current.value;
    const meetupAddress = addressInputRef.current.value;
    const meetupDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: meetupTitle,
      image: meetupImage,
      address: meetupAddress,
      description: meetupDescription,
    };

    props.onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.control}>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" required ref={titleInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="image">Image URL</label>
          <input type="url" id="image" required ref={imageInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="address">Address</label>
          <input type="text" id="address" required ref={addressInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            rows="5"
            required
            ref={descriptionInputRef}
          />
        </div>
        <div className={styles.actions}>
          <button>Confirm</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
