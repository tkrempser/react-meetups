import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
  {
    id: "1",
    title: "First meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Vista_do_centro_de_Juiz_de_Fora-MG.JPG/800px-Vista_do_centro_de_Juiz_de_Fora-MG.JPG",
    address: "Centro, 12345 - Juiz de Fora, MG",
    description: "This is a first meetup which you definitely should not miss.",
  },
  {
    id: "2",
    title: "Second meetup",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c1/P_Bienio.jpg",
    address: "Cidade Universitária, 12345 - São Paulo, SP",
    description: "This is the amazing second meetup. It will be a lot of fun!",
  },
];

function AllMeetups() {
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={DUMMY_DATA} />
    </section>
  );
}

export default AllMeetups;
