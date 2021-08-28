import { useRef } from "react";

import styles from "./NewMeetupForm.module.css";
import Card from "../layout/Card";
import Spinner from "../layout/Spinner";

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
          <input
            type="text"
            id="title"
            disabled={props.isSaving}
            required
            ref={titleInputRef}
          />
        </div>
        <div className={styles.control}>
          <label htmlFor="image">Image URL</label>
          <input
            type="url"
            id="image"
            disabled={props.isSaving}
            required
            ref={imageInputRef}
          />
        </div>
        <div className={styles.control}>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            disabled={props.isSaving}
            required
            ref={addressInputRef}
          />
        </div>
        <div className={styles.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            rows="5"
            disabled={props.isSaving}
            required
            ref={descriptionInputRef}
          />
        </div>
        <div className={styles.actions}>
          <button disabled={props.isSaving}>
            {props.isSaving ? <Spinner /> : "Save"}
          </button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
