import React from 'react';
import Dream from '../Targets/dreams.jsx';
import Cards from './card.jsx'
import './contactstyle.css'

 const Contacts = (props) => {

    return (
        <div className = 'Contacts'>
            <Cards title='Мухамед' src={props.state.fir} text = 'Привет Братанчик'/>
            <Cards title='Алли' src={props.state.sec} text = 'Алоха'/>
            <Cards title='Ежжи' src={props.state.thr} text = 'Тевирп'/>
            <Cards title='Братья' src={props.state.four} text = 'Салам'/>
        </div>
   
    )}
export default Contacts