import React from 'react';
import { Route, Switch } from "react-router-dom"
import "./App.css";

// Pages
import Home from  './Pages/Home'
import Contact from './Pages/Contact'

// NavBar
import Navbar from './components/Burger/Navbar'



function App() {
  return (
    <>
    <Navbar/>
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Contact" component={Contact}/>
      </Switch>
    </>
  );
}

export default App;