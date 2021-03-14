import "./App.css";
import Navigation from "./components/navigation/navigation";

import { Route, BrowserRouter, Switch } from "react-router-dom";
import { useCallback, useEffect } from "react";
import NoMatch from "./pages/404/404-page";
import Contacts from "./pages/contacts-page/contacts-page";
import CreateContactAndGroup from "./pages/create-contact/create-contact-group-page";
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
            <Route component={NoMatch} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default connect(null)(App);
