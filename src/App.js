import { Route, Switch } from "react-router-dom";

import AllMeetups from "./pages/AllMeetups";
import NewMeetup from "./pages/NewMeetup";
import Favorites from "./pages/Favorites";
import NavigationMenu from "./components/layout/NavigationMenu";

function App() {
  return (
    <div>
      <NavigationMenu />
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
    </div>
  );
}

export default App;
