import "./App.css";
import Navigation from "./components/navigation/navigation";

import { Route, BrowserRouter, Switch } from "react-router-dom";
import { useEffect } from "react";
import NoMatch from "./pages/404/404-page";
import Contacts from "./pages/contacts-page/contacts-page";
import CreateContactAndGroup from "./pages/create-contact/create-contact-group-page";
import UpdateContact from "./pages/update-contact/update-contact.component";
import UpdateGroup from "./pages/update-group/update-group.component";

import { connect } from "react-redux";

function App() {
  useEffect(() => {}, []);

  return (
    <BrowserRouter>
      <div className="page" id="page">
        <Navigation />
        <div className="App">
          <Switch>
            <Route exact path="/" render={() => <Contacts />}></Route>
            <Route
              exact
              path="/create-contact"
              render={() => <CreateContactAndGroup />}
            ></Route>
            <Route
              exact
              path="/edit-contact"
              render={(props) => <UpdateContact {...props} />}
            ></Route>
            <Route
              exact
              path="/edit-group"
              render={(props) => <UpdateGroup {...props} />}
            ></Route>
            <Route component={NoMatch} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default connect(null)(App);
