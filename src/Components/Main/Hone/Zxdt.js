import React, {
	Component
} from 'react';
import './Hone.css';
import dw from './img/5.png';
import ds from './img/1.png';
import zb from './img/3.png';
import fz from './img/2.png';
import f from './img/4.png';
class Zxdt extends Component {
	render() {
		return(
			<div className="Zxdt">
        	  <div className="Zxdcenter">
        	  	<div className="tsjxcntitle">
			   	 <b>最新动态</b>
                 <p> TELATEST NEWS</p>
			  	 </div>
				{/*标题结束*/}
				{/*title开始*/}
				<div className="tsjxlogo">
                    <img src="http://11822707.s61i.faiusr.com/4/AD0I88zRBRAEGAAg4cP-wAUo6drX8QEwqgE4YA.png"/>
				</div>
				{/*title结束*/}
				<div className="Zxdcont">
				  <div className="Zxdcontleft">
				    <img src=""/>
				  </div>
				</div>
        	  </div>
     	  	</div>
		);
	}
}

export default Zxdt;