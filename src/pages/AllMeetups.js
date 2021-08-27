import { useEffect, useState } from "react";

import { getFirebase, getFirebaseFallback } from "../utils/firebaseUtils";
import MeetupList from "../components/meetups/MeetupList";
import Spinner from "../components/layout/Spinner";

function AllMeetups() {
  const [isLoading, setIsLoading] = useState(true);
  const [allMeetups, setAllMeetups] = useState([]);

  function setAllMeetupsHandler(meetupData) {
    if (meetupData !== null) {
      setAllMeetups(
        Object.entries(meetupData).map(function (entry) {
          let meetupEntry = entry[1];
          meetupEntry["id"] = entry[0];
          return meetupEntry;
        })
      );
    } else {
      console.log("Empty database");
    }
    setIsLoading(false);
  }

  useEffect(function () {
    getFirebase(10)
      .then(function (snapshot) {
        setAllMeetupsHandler(snapshot.val());
      })
      .catch(function (error) {
        console.log(error.message);
        getFirebaseFallback()
          .then(function (data) {
            setAllMeetupsHandler(data);
          })
          .catch(function (error) {
            console.log(error.message);
          });
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
