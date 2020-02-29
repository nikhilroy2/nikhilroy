import React from 'react';
import Nikhil_image from '../../image/nikhil.jpg';
import { NavLink } from 'react-router-dom';
import './header.css';
export default class Header extends React.Component{
    constructor(){
        super();
        this.state = {
            isToggle : false
        }
    }
    btnToggle = ()=> {
        this.setState({
            isToggle: !this.state.isToggle
        })
    }

    render(){
        return (
            <header>



                {/* Side Header */}
                <div style={{ overflow: 'auto'}} className=" main_side_header bg_222
                 fixed-top w_250 h-100 header_sm_style d-md-block">
                    <img className="w-100" id="logo" src={Nikhil_image} alt=""/>
                    <h2 className="m-0 d-none d-md-block p-1 bg-dark text-center text-light">Nikhil Roy</h2>
                  
                   <button onClick={this.btnToggle} className="btn_toggle_bar d-inline-block d-md-none">
                       <i className="fas fa-bars bg-white   "></i>
                   </button>
                   <div 
                    style={{width: 'calc(100% - 50px)', height: '40px', verticalAlign: 'bottom'}} className="d-inline-flex bg-dark d-md-none align-items-center justify-content-center">
                          <SocialContact />
                      </div>


                    <ul   className={this.state.isToggle ? 'd-block mp_0 ': 'd-none ' + " toggle_menu_style d-md-block  list_style_none mp_0 "}  >


                        <li className=" d-block">
                            <NavLink  exact className="border_228_bottom d-block text-white-50
                             px-1 py-2 pl-5 text-uppercase  " to="/" activeClassName="text-light"> 
                        <i className="fas fa-home pr-2   " ></i>
                        
                        Home
                        </NavLink></li>
                        <li  className=" d-block">
                            <NavLink  className="border_228_bottom d-block
                         text-white-50 px-1 py-2 pl-5 text-uppercase  " to="/about_me" activeClassName="text-light"> 
                        <i className="far fa-address-card pr-2" ></i>
                        
                        About Me
                        
                        
                        </NavLink></li>
                        <li  className=" d-block"><NavLink  className="border_228_bottom d-block
                         text-white-50 px-1 py-2 pl-5 text-uppercase  " to="/resume" activeClassName="text-light"> 
                        <i className="fab fa-readme pr-2" ></i>
                        
                        Resume
                        
                        
                        </NavLink></li>
                        <li  className=" d-block"><NavLink  className="border_228_bottom d-block
                         text-white-50 px-1 py-2 pl-5 text-uppercase  " to="/portfolio" activeClassName="text-light"> 
                        <i className="fas fa-user-graduate pr-2" ></i>
                        
                        PortFolio
                        
                        
                        </NavLink></li>
                        {/* <li  className=" d-block"><NavLink  className="border_228_bottom d-block 
                        text-white-50 px-1 py-2 pl-5 text-uppercase" to="/blogs" activeClassName="text-light"> 
                        <i className="fab fa-blogger   pr-2 " ></i>
                        
                        Blog
                        
                        
                        </NavLink></li> */}
                        <li  className=" d-block"><NavLink  className="border_228_bottom
                         d-block text-white-50 px-1 py-2 pl-5 text-uppercase" to="/contact" activeClassName="text-light"> 
                       <i className="fas fa-user   pr-2 " ></i>
                        
                        Contact
                        
                        
                        </NavLink></li>
                      

                    </ul>

                   <div className="d-none d-md-block mt-4">
                   <SocialContact display="d-none " />
                   </div>
                    <strong className="text-center text-white-50  d-none d-md-block  p-2">
                        2020 &copy; Nikhil Roy Portfolio <br/>
                        All Right Reserved.
                    </strong>
                    
                </div>
            </header>
        )
    }
}


const SocialContact = (props)=> {

    
    return (
        <ul className={ (props.display ? props.display : null) +  " flex-nowrap px-2 w-100 d-md-flex nav justify-content-center "}>
        <li className="nav-item mp-0 flex-grow-1 text-center  mx-1">
            <a className="nav-link  mp_0 px-3 text-light  " target="_blank"
             href="http://linkedin.com/in/nikhilroy2" title="LinkeDin">

                <i className="fab fa-linkedin    "></i>
            </a>
        </li>
        <li className="nav-item mp_0 flex-grow-1 text-center  mx-1">
            <a className="nav-link  mp_0 px-3 text-light  "
            title="Dribbble" target="_blank" href="http://dribbble.com/nikhilroy2">
                <i className="fab fa-dribbble    "></i>
            </a>
        </li>
        <li className="nav-item mp_0 flex-grow-1 text-center  mx-1">
            <a
            title="CodePen" className="nav-link  mp_0 px-3 text-light  " target="_blank" href="http://codepen.com/nikhilroy2">
                <i className="fab fa-codepen    "></i>
            </a>
        </li>
        <li className="nav-item mp_0 flex-grow-1 text-center  mx-1">
            <a title="StackOverFlow" className="nav-link  mp_0 px-3 text-light  " target="_blank" href="http://stackoverflow.com/nikhilroy2">
                <i className="fab fa-stack-overflow    "></i>
            </a>
        </li>
        <li className="nav-item mp_0 flex-grow-1 text-center  mx-1">
            <a title="Dev" className="nav-link  mp_0 px-3 text-light  " target="_blank" href="http://dev.to/nikhilroy2">
                <i className="fab fa-dev    "></i>
            </a>
        </li>
    </ul>
    )
}