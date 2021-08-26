import { Route, Switch } from "react-router-dom";

import AllMeetups from "./pages/AllMeetups";
import NewMeetup from "./pages/NewMeetup";
import Favorites from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/react-meetups/new/">
          <NewMeetup />
        </Route>
        <Route path="/react-meetups/favorites/">
          <Favorites />
        </Route>
        <Route path="/react-meetups/">
          <AllMeetups />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
