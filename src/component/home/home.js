import React, { Component } from 'react';
import './home.css';
import ReactTypingEffect from 'react-typing-effect';
import TopProjectPost from '../pages/portfolio/topproject/topproject';
import AppLang from '../pages/resume/appLang/applang';
import AboutmeTop from '../pages/about/aboutmetop/aboutmetop';

export default class Home extends Component {
    render() {

        document.title = 'Nikhil Roy PortFolio ----- HomePage'
        return (
           <React.Fragment>
 <div className="homepage  text-light d-flex 
            justify-content-center align-items-center  p-5 h_100mvh">
                <div className="">
                <div  style={{fontSize: '10vw'}} className=" text-center">

                    </div>
                    <div style={{fontSize: '10vw'}} className=" text-center">
                        Nikhil <span className="text-primary">Roy</span>
                    </div>
                    <div style={{fontSize: '5vw'}} className="display-4 text-center">
                    <ReactTypingEffect
      text={["Web Development","Web Responsive Design", " UI Web Design"]}
      typingDelay={10}
      eraseDelay={1000}
      speed={100}
      cursor="|"

      //text=["Hello.", "World!"]
    />
                    </div>
                  
                </div>
            </div>

            <div className="container-fluid px-4 text-light ">

            <div className="row py-4 border_bottom_dotted">
                    <div className="col-6 mp_0">
                        <h2 className="mp_0">
                        About Me
                        </h2>
                    </div>
                    <div className="col-6 mp_0 text-right text-white-50"> 
                    {/* <img src={About_icon} alt=""/> */}
                    </div>
                </div>
<AboutmeTop/>


                </div>

            <div className="container-fluid px-4 text-light ">


                <div className="row py-4  border_bottom_dotted">
                    <div className="col-6 mp_0">
                        <h2 className="mp_0">
                        Top Project
                        </h2>
                    </div>
                    <div className="col-6 mp_0 text-right text-white-50"> 
                    {/* <img src={About_icon} alt=""/> */}
                    </div>
                </div>

                </div>
            <div className="row no-gutters pt-3">
                <TopProjectPost/>
            </div>

            <div className="container-fluid px-4 text-light ">
                <div className="row py-4  border_bottom_dotted">
                    <div className="col-6 mp_0">
                        <h2 className="mp_0">
                        Top Skills
                        </h2>
                    </div>
                    <div className="col-6 mp_0 text-right text-white-50"> 
                    {/* <img src={About_icon} alt=""/> */}
                    </div>
                </div>
                <div className="row py04">
                    <div className="col-12">
                    <AppLang/>
                    </div>
                </div>

                </div>

        


           </React.Fragment>
        )
    }
}
