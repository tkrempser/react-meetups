import { saveFirebase } from "../utils/firebaseUtils";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetup() {
  function addMeetupHandler(meetupData) {
    saveFirebase(meetupData);
  }

  return (
    <section>
      <h1>New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetup;
