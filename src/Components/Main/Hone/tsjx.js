import React, {
	Component
} from 'react';
import './Hone.css';
import log from './img/log.png';
import lo from './img/lo.png';
import logo from './img/logo.png';
class Tsjx extends Component {
	render() {
		return(
			<div className="tsjx">
			{/*txjx学校*/}
			   <div className="tsjxcnter">
			   {/*标题开始*/}
			   	<div className="tsjxcntitle">
			   	<b>特色教学</b>
                 <p>CHARACTERISTIC TEACHING</p>
			  	 </div>
				{/*标题结束*/}
				<div className="tsjxlogo">
                    <img src="http://11822707.s61i.faiusr.com/4/AD0I88zRBRAEGAAg4cP-wAUo6drX8QEwqgE4YA.png"/>
				</div>
                 {/*内容开始*/}
                 <div className="tsjxcenter">
                    <div className="tsjxleft">
                        <div className="tsjlogo">
                           <img src={log}/>
                        </div>
                        <div className="tsjzj">
                           <p>美术<span>FINE ARTS</span> </p>
                        </div>
                        <div className="tsjp">
                        <p>关于儿童美术教育的核心理念，朱敬一- 知名艺术家，艺术普及专家提出了“感知力是美学的第一要义”这个观点。</p>
                        </div>
                        <div className="tsjbtn">
                            <a href="JavScript:;">查看更多</a>
                        </div>
                    </div>

                    <div className="tsjxzj">
                          <div className="tsjxl">
                        <div className="tsjlogo">
                           <img src={lo}/>
                        </div>
                        <div className="tsjzj">
                           <p>美术<span>FINE ARTS</span> </p>
                        </div>
                        <div className="tsjp">
                        <p>关于儿童美术教育的核心理念，朱敬一- 知名艺术家，艺术普及专家提出了“感知力是美学的第一要义”这个观点。</p>
                        </div>
                        <div className="tsjbtn">
                            <a href="JavScript:;">查看更多</a>
                        </div>
                    </div>
                    </div>

                    
                    <div className="tsjxright">
                        <div className="tsjlogo">
                           <img src={log}/>
                        </div>
                        <div className="tsjzj">
                           <p>美术<span>FINE ARTS</span> </p>
                        </div>
                        <div className="tsjp">
                        <p>关于儿童美术教育的核心理念，朱敬一- 知名艺术家，艺术普及专家提出了“感知力是美学的第一要义”这个观点。</p>
                        </div>
                        <div className="tsjbtn">
                            <a href="JavScript:;">查看更多</a>
                        </div>
                   
                    </div>
                  </div>

             	 {/*内容结束*/}
			   </div>
			</div>
		);
	}
}

export default Tsjx;