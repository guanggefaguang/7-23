import React, { Component } from 'react';
import { Carousel } from 'antd';
import './Banner.css'

class Banner extends Component{

    render(){
        return (
            <Carousel autoplay>
                <div><img src={"http://11822707.s61i.faiusr.com/2/AD0I88zRBRACGAAgnNibywUo6NTm5QYwgA84ggc.jpg"}/></div>
                <div><img src={"http://11822707.s61i.faiusr.com/2/AD0I88zRBRACGAAgn9ibywUo7_2mCDCADziCBw.jpg"}/></div>
            </Carousel>
        )
    }
    componentDidMount(){

    }
}
export default Banner

