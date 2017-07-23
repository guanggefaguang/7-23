import React, { Component } from 'react';
import Banner from './Banner/Banner.js';
import Home from './Hone/Hone';
import Center from './Hone/Center';
import  Tsjx from './Hone/tsjx';
import Jiaoxue from './Hone/Jiaoxue';
import Zxdt from './Hone/Zxdt'
class Main extends Component{
    render(){
        return (
        	<div>
            <Banner />
            <Home />
              <Center />
              <Tsjx/>
              <Jiaoxue />
              <Zxdt />
            </div>
        )
    }
}
export default Main