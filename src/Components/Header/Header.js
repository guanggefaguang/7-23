/**
 * Created by LHG on 2017/7/13.
 */
import React, { Component } from 'react';
import './Header.css';


class Header extends Component{

    constructor(){
        super()
        this.state={abc:[{title:"首页"},{title:"园所概况"},{title:"园丁风采"},{title:"特色教学"},{title:"入园须知"},{title:"最新动态"}]}
    }
    conponentDidMount(){
        // $.ajax({
        //     url:"",
        //     type:"get",
        //     success:function (e) {
        //         this.setState({abc:e})
        //     }.bind(this)
        // })
    }
    render(){
        return (
            <div className="shareHeader">
                <div className="shMain">
                    <span>School Design</span>
                    <ul>
                        {this.state.abc.map((e)=> {
                            return <li><a href="#">{e.title}</a></li>
                        })
                        }
                        {/*<li><a href="#">首页</a></li>*/}
                        {/*<li><a href="#">园所概况</a></li>*/}
                        {/*<li><a href="#">园丁风采</a></li>*/}
                        {/*<li><a href="#">特色教学</a></li>*/}
                        {/*<li><a href="#">入园须知</a></li>*/}
                        {/*<li><a href="#">最新动态</a></li>*/}
                    </ul>
                </div>
            </div>
        )
    }
}
export default Header