import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import AdminDashboard from './components/Admin/AdminDashboard/AdminDashboard';
import Addservice from './components/Admin/Addservice/Addservice';
import Makeadmin from './components/Admin/Makeadmin/Makeadmin';
import UserOrder from './components/Users/UserOrder/UserOrder';
import UserServicelist from './components/Users/UserServicelist/UserServicelist';
import UserReview from './components/Users/UserReview/UserReview';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [userorder, setUserorder] = useState({});
  return (
    <UserContext.Provider value={{loggedInUser, setLoggedInUser,userorder, setUserorder}}>
        <Router>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/admin">
              <AdminDashboard></AdminDashboard>
            </PrivateRoute>
            <PrivateRoute path="/addservice">
              <Addservice></Addservice>
            </PrivateRoute>
            <PrivateRoute path="/makeadmin">
              <Makeadmin></Makeadmin>
            </PrivateRoute>
            <PrivateRoute path="/user/:email">
              <UserOrder></UserOrder>
            </PrivateRoute>
            <PrivateRoute path="/user">
              <UserOrder></UserOrder>
            </PrivateRoute>
            <PrivateRoute path="/orderlist">
                <UserServicelist></UserServicelist>
            </PrivateRoute>
            <PrivateRoute path="/review">
              <UserReview></UserReview>
            </PrivateRoute>
            <Route exact path="/">
              <Home></Home>
            </Route>
          </Switch>
        </Router>
    </UserContext.Provider>
    
  );
}

export default App;
