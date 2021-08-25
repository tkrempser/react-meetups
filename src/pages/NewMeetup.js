import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetup() {
  function addMeetupHandler(meetupData) {
    fetch(
      "https://react-meetups-4e634-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  return (
    <section>
      <h1>New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetup;
