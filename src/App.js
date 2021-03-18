import React, {useState} from 'react';
import { Route, Switch } from "react-router-dom"
import styled from 'styled-components';

// Pages
import Home from  './Pages/Home'
import Contact from './Pages/Contact'

// Burger Menu and NavBar
import Navbar from './components/Burger/Navbar'
import Burger from './components/Burger/Burger'
import Menu from './components/Burger/Menu'


const StyledNavBarContainer = styled.div`
  position: sticky;
  top: 0;`

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
    <StyledNavBarContainer>
    <Navbar/>
    <Burger modalOpen={modalOpen} setModalOpen={setModalOpen} />
        <Menu modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </StyledNavBarContainer>
      <Switch>
      <Route exact path="/" render={() => <Home />} />
      <Route path="/Contact" render={() => <Contact />} />
      </Switch>
    </>
  );
}

export default App;