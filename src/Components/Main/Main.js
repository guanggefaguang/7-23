import React, { Component } from 'react';
import Banner from './Banner/Banner.js';
import Home from './Hone/Hone';

class Main extends Component{
    render(){
        return (
        	<div>
            <Banner />
            <Home />
            </div>
        )
    }
}
export default Main