import React, { createContext } from 'react';
import './App.css';
import Header from './components/Header/Header'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import NotFound from './components/NotFound/NotFound';

import { useState } from 'react';
import Home from './components/pages/Home/Home';
import Login from './components/pages/Auth/Login/Login';
import CreateAccount from './components/pages/Auth/CreateAccount/CreateAccount';
import Search from './components/pages/Search/Search';
import Booking from './components/pages/Booking/Booking';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NotFound from './components/NotFound/NotFound';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header />

        <Switch>

          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/create-account" component={CreateAccount} />
          {/* <PrivateRoute path="/search" component={Search} /> */}
          <PrivateRoute path="/search">
            <Search></Search>
          </PrivateRoute>

          <Route path="/booking/:place" component={Booking} />

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>


      </Router>
    </UserContext.Provider>
  );
}

export default App;
