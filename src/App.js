import React, { useState } from 'react';
import { createContext } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Movies from './Components/Movies/Movies';
import NavBar from './Components/Navbar/NavBar';
import Booking from './Components/Booking/Booking';
import LoginA from './Components/LoginAlter/sign-in/LoginA';
import SignUp from './Components/LoginAlter/sign-up/SignUp'

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [ bookingInfo, setBookingInfo ] = useState({});
  return (
    <UserContext.Provider value={[ bookingInfo, setBookingInfo, loggedInUser, setLoggedInUser]}>
      {/* <h3>email: {loggedInUser.email}</h3> */}
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/loginA">
            <LoginA />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/movies">
          <NavBar />
            <Movies />
          </Route>
          <Route path="/booking/:movieName">
          <NavBar />
            <Booking />
          </Route>
          <Route exact path="/">
              <Home></Home>
            </Route>
          {/* <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <PrivateRoute path="/inventory">
            <Inventory></Inventory>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/shipment">
            <Shipment></Shipment>
          </PrivateRoute>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/product/:productKey">
            <ProductDetail></ProductDetail>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route> */}
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
