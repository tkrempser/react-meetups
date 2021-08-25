import { useEffect, useState } from "react";

import { getFirebase } from "../utils/firebaseUtils";
import MeetupList from "../components/meetups/MeetupList";
import Spinner from "../components/layout/Spinner";

function AllMeetups() {
  const [isLoading, setIsLoading] = useState(true);
  const [allMeetups, setAllMeetups] = useState([]);

  useEffect(function () {
    getFirebase(10)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setAllMeetups(Object.values(snapshot.val()));
        } else {
          console.log("Empty database");
        }
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }, []);

  if (isLoading) return <Spinner />;

  return (
    <section>
      <h1>All Meetups</h1>
      {allMeetups.length ? (
        <MeetupList meetups={allMeetups} />
      ) : (
        <p>No meetups available</p>
      )}
    </section>
  );
}

export default AllMeetups;
