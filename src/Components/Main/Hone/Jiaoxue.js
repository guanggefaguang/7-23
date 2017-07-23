import React, {
	Component
} from 'react';
import './Hone.css';
import dw from './img/5.png';
import ds from './img/1.png';
import zb from './img/3.png';
import fz from './img/2.png';
import f from './img/4.png';
class Jiaoxue extends Component {
	render() {
		return(
			<div className="Jiaoxue">
        	  <div className="jxcenter">
<div className="lhglhgCtitle">
                <b>特色小学</b>
                <p>CHARACTERISTIC TEACHING</p>
               </div>
               {/*title结束*/}
               {/*logo开始*/}
               <div className="lhgclogo">
                 <img src="http://11822707.s61i.faiusr.com/4/AD0I88zRBRAEGAAgy8--wAUonL6hSzCqAThe.png"/>
               </div>
               {/*logo结束*/}
                <div className="tsjxconter">
                  <div className="tsleft">
                    <img src={dw}/>
                     <div className="tsla">
                      <a href="javaScript:;">知识渊博者</a>
                     </div>
                  </div>
              {/*中间*/}
                  <div className="tsxc">
                    <div className="tsxbaner">
                     <img src={ds}/>
                    </div>
                    <div className="tsxbottom">
                     <div className="tsxbleft">
                        <div className="tsxblefta">
                          <a href="javaScript:;">凡与思考</a>
                        </div>
                        <div className="tsxblefl">
                          <img src={zb}/>
                        </div>
                     </div>
                     <div className="tsxbright">
                       <img src={fz}/>
                     </div>
                 {/*中间结束*/} 
                     </div>
                    </div>
                   <div className="tsxbr">
                      <div className="tsxbra">
                         <a href="javaScript:;">关爱他人者</a>
                      </div>
                         <img src={f}/>    
                      


                   </div>

                </div>
              </div>
     	  </div>
		);
	}
}

export default Jiaoxue;