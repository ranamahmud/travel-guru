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
// import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header />

        <Switch>
          {/* <Route path="/shop">    <Shop></Shop>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route> */}
          {/* <PrivateRoute path="/orders">
            <Inventory></Inventory>
          </PrivateRoute> */}
          {/* <Route path="/login">
            <Login></Login>
          </Route> */}
          {/* <PrivateRoute path="/shipment">
            <Shipment></Shipment>
          </PrivateRoute>
          <Route exact path="/">    <Shop></Shop>
          </Route>
          <Route path="/product/:productkey">
            <ProductDetail></ProductDetail>
          </Route>
          <Route path="*">
            <NotFound />
          </Route> */}
        </Switch>


      </Router>
    </UserContext.Provider>
  );
}

export default App;
