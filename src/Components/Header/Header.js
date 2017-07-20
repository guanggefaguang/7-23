/**
 * Created by 马霄雷 on 2017/7/13.
 */
import React, { Component } from 'react';
import './Header.css';

class Header extends Component{
    render(){
        return (
            <div className="shareHeader">
                <div className="shMain">
                    <span>School Design</span>
                    <ul>
                        <li><a href="#">首页</a></li>
                        <li><a href="#">园所概况</a></li>
                        <li><a href="#">园丁风采</a></li>
                        <li><a href="#">特色教学</a></li>
                        <li><a href="#">入园须知</a></li>
                        <li><a href="#">最新动态</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Header