import React, { ReactElement } from 'react';
import { UserList } from './components/UserList';
import UserDetails from './components/UserDetails';
import './App.css';
import {
  BrowserRouter ,
  Switch,
  Route,
    NavLink
} from "react-router-dom";



function App():ReactElement{
  return (
       <div className="App">
          <BrowserRouter>
          <div className="ui secondary  menu">
          <NavLink to="/comments">Home</NavLink>
          <NavLink to="/:id">Details</NavLink>
          </div>

      <Switch> 
      <Route exact path="/comments">
      <UserList/>
        </Route>
        <Route  path="/comments/:id">
      <UserDetails/>
        </Route>
      </Switch> 
      </BrowserRouter>
         </div>
   
  );
}

export default App;
