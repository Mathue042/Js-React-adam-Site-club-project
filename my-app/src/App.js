import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Header from './components/header.jsx'
import Dream from './components/mini/dreams.jsx'
import Main from './components/main_content.jsx'
import Creators from './components/creators.jsx'
import Contacts from './components/contacts.jsx'

const App = () => {
  return (
    <BrowserRouter>
       <div className='App'>
        <Header/>  
           <Route path="/Main" component={Main}/>
           <Route path="/Dreams" component ={Dream}/>
           <Route path="/Creators" component={Creators}/>
           <Route path="/Contacts" component={Contacts}/>
       </div>
    </BrowserRouter>
  );
}

export default App;
