import { useHistory } from "react-router-dom";

import { saveFirebase } from "../utils/firebaseUtils";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetup() {
  const history = useHistory();

  async function addMeetupHandler(meetupData) {
    await saveFirebase(meetupData)
      .then(function () {
        history.replace("/");
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }

  return (
    <section>
      <h1>New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetup;
