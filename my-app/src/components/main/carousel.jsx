import React from 'react';
import {Carousel} from 'antd';
import 'antd/dist/antd.css';
import './main.css'

 const Harousel = () => {

    return (
      <div>
    <Carousel autoplay styleName='ant-carousel'>
      <div  >
    
      <img  style = {{widh:300, height:300}} src="https://instagram.fhel4-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p750x750/82245445_1410532455784587_2782958234182015740_n.jpg?_nc_ht=instagram.fhel4-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=r26XEuRHk1UAX9plF50&oh=1d9b0f7fa9de3ce8169b90a063ad30e6&oe=5ED339D4" />
      </div>
      <div>
        <h3 style = {{widh:300, height:300}}>2</h3>
      </div>
      <div>
        <h3 style = {{widh:300, height:300}}>3</h3>
      </div>
      <div>
        <h3 style = {{widh:300, height:300}}>4</h3>
      </div>
    </Carousel>
    </div>
  ) 
}
export default Harousel