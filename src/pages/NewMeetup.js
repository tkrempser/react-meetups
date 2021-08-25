import { useHistory } from "react-router-dom";

import { saveFirebase } from "../utils/firebaseUtils";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetup() {
  const history = useHistory();

  function addMeetupHandler(meetupData) {
    return new Promise(function (resolve) {
      resolve(saveFirebase(meetupData));
    })
      .then(function () {
        history.replace("/");
      })
      .catch(function (error) {
        console.log(error);
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
