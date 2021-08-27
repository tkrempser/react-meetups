import { useState } from "react";
import { useHistory } from "react-router-dom";

import { saveFirebase } from "../utils/firebaseUtils";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetup() {
  const [isSaving, setIsSaving] = useState(false);

  const history = useHistory();

  function addMeetupHandler(meetupData) {
    setIsSaving(true);
    saveFirebase(meetupData)
      .then(function () {
        history.replace("/");
      })
      .catch(function (error) {
        console.log(error.message);
        setIsSaving(false);
      });
  }

  return (
    <section>
      <h1>New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} isSaving={isSaving} />
    </section>
  );
}

export default NewMeetup;
