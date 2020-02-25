import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Header from './components/header/header.jsx'
import Dream from './components/Targets/dreams.jsx'
import Main from './components/main/main_content.jsx'
import Creators from './components/creators/creators.jsx'
import Contacts from './components/contacts/Contacts.jsx'

const App = (props) => {
  return (
    <BrowserRouter>
       <div className='App'>
           <Route path="/Main" render ={() => <Main state={props.state}/>}/>
           <Route path="/Dreams" render ={() => <Dream state={props.state}/>}/>
  <Route path="/Creators" render ={() => <Creators state={props.state}/>}/>
  <Route path="/Contacts" render ={() => <Contacts state={props.state}/>}/>
           <Header/>  
       </div>
    </BrowserRouter>
  );
}

export default App;
