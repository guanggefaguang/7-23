import React, { Component } from 'react';
import Banner from './Banner/Banner.js';
import Home from './Hone/Hone';
import Center from './Hone/Center';
import  Tsjx from './Hone/tsjx';
class Main extends Component{
    render(){
        return (
        	<div>
            <Banner />
            <Home />
              <Center />
              <Tsjx/>
            </div>
        )
    }
}
export default Main