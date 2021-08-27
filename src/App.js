import { Route, Switch } from "react-router-dom";

import AllMeetups from "./pages/AllMeetups";
import NewMeetup from "./pages/NewMeetup";
import Favorites from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/new/">
          <NewMeetup />
        </Route>
        <Route path="/favorites/">
          <Favorites />
        </Route>
        <Route path="/">
          <AllMeetups />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
