import React from 'react';
import './Header.css'
import text from 'antd'
import { NavLink } from 'react-router-dom';


const Header = () =>  {
    return (
    <header className = 'App-header'> 
   
    <img style = {{widh:60, height:60}} src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Mail.Ru_Group_logo.png"  />

       <text>
           <NavLink to='/Main' className='inactive' activeClassName='active'>главная
           </NavLink>
           </text> 
       <text>
       <NavLink to='/Dreams' className='inactive' activeClassName='active'>цели
           </NavLink>
           </text> 
       <text> <NavLink to='/Creators' className='inactive' activeClassName='active'>создатели
           </NavLink></text> 
       <text><NavLink to='/Contacts' className='inactive' activeClassName='active'>контакты
           </NavLink></text> 
    </header>
    )
}

export default Header