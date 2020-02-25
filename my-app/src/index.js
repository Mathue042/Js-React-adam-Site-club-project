import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let state ={
    fir: 'https://scontent-frt3-2.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/85092709_517618345808637_2297889519844291145_n.jpg?_nc_ht=scontent-frt3-2.cdninstagram.com&_nc_cat=109&_nc_ohc=sonriHgM7vYAX9XtQR8&oh=04bd7d90fc2ec9783e2992eb39d8f959&oe=5EFDE218',
    sec: 'https://instagram.fhel5-1.fna.fbcdn.net/v/t51.2885-15/e35/33164954_2135183430093805_2263969212676440064_n.jpg?_nc_ht=instagram.fhel5-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=ckb2m-VILJQAX8G9Fy8&oh=1f9143fceffdbc97cd13fddd3d60720f&oe=5EE6610D',
    thr: 'https://instagram.fhel5-1.fna.fbcdn.net/v/t51.2885-15/e35/40409908_160699284861523_5485584501763375563_n.jpg?_nc_ht=instagram.fhel5-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=M9lYcEWRMpoAX94zf7k&oh=523277237f73055c0f1c5691aff387d6&oe=5EFA2C9F',
    four: 'https://sun9-52.userapi.com/c855636/v855636933/1acc11/HDBv8VP8Sq4.jpg'
}

ReactDOM.render(<App state ={state}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
