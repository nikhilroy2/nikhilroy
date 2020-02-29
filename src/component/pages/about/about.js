import React, { Component } from 'react';
import About_icon from '../../image/icons/about_me.png';
import Service_icon from '../../image/icons/services.png';
import Web_dev_icon from '../../image/icons/web_dev.png';
import Web_design_cion from '../../image/icons/web_design.png';
import Web_responsive_icon from '../../image/icons/responsive.png';
import Web_App_icon from '../../image/icons/web_app.png';
import AboutmeTop from './aboutmetop/aboutmetop';

export default class About extends Component {
   
  
    render() {
        document.title = 'Nikhil Roy PortFolio ----- About Me'
        return (
            <div className="container-fluid px-2 text-light ">
                <div className="row no-gutters py-4 border_bottom_dotted">
                    <div className="col-12 mp_0">
                        <h2 className="mp_0">
                        About Me
                        </h2>
                    </div>
                  
                </div>
               <AboutmeTop/>

                <div className="row no-gutters py-4 border_bottom_dotted">
                    <div className="col-12 mp_0">
                        <h2 className="mp_0">
                        Services
                        </h2>
                    </div>
                   
                </div>
                <div className="row no-gutters">
                    <div className=" justify-content-center col-sm-6 col-md-6 d-flex col-lg-3 mp_0 p-1">

                        <Service_card
                        
                        card_title="Web Development"
                        srcPath={Web_dev_icon}
                        description="
                        
                      Developed Your Future Web Site Here with
                      best Developer
                        
                        "
                        >
                        </Service_card>


                    </div>
                    <div className=" justify-content-center col-sm-6 col-md-6 d-flex col-lg-3 mp_0 p-1"
                    
                    
                    >

                    <Service_card
                    
                    card_title="Web Design"
                    srcPath={Web_design_cion}

                    description="
                        
                      Design Your Web Site with New Version with 3D Mode.
                        
                        "
                    >
                    </Service_card>



                    </div>
                    <div className="justify-content-center col-sm-6 col-md-6 col-lg-3 d-flex mp_0 p-1"
                    
                    >

                    <Service_card
                    
                    card_title=" Responsive Design"
                    srcPath={Web_responsive_icon}

                    description="
                        
                      Responsive Your Web with mobile fast Layout.
                        
                        "
                    >
                    </Service_card>



                    </div>
                    <div className="justify-content-center col-sm-6 col-md-6 d-flex col-lg-3 mp_0 p-1"
                    
                    >

                    <Service_card
                    
                    card_title="Web App Development"
                    srcPath={Web_App_icon}

                    description="
                        
                      Control Your Web Everything by Making Web Application.
                        
                        "
                    >
                    </Service_card>



                    </div>
                </div>
            </div>
        )
    }
}

const Service_card = (props)=> {
    return (
        <>

        <div style={{minHeight: '280px'}} className="align-self-center card bg_none p-1 border border-white my-3">
          {/* <img className="card-img-top w-50 mx-auto" src={props.srcPath} alt=""/> */}
    <div className="display-4 pb-3 text-center weight-bold">{"</>"}</div>
         
          <div className="card-body mp_0 ">
            <h5 className=" card-title mp_0 text-center">{props.card_title}</h5>
    <p className="card-text text-center pt-3">{props.description}</p>
          </div>
        </div>



        </>
    )
}