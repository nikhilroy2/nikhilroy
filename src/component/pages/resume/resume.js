import React, { Component } from 'react';
import './resume.css';
import AppLang from './appLang/applang';
import VS_icon from '../../image/icons/vs_icon.png';

export default class Resume extends Component {
    constructor(props) {
        super(props)

        this.state = {
            rangeValue: 0,
            currentValue: 0
        }
    }
    componentDidMount() {
      this.update = setInterval(() => {
            this.state.currentValue++;
            this.setState({
                rangeValue: this.state.currentValue
            })
        }, 40)
    }
    componentWillUnmount(){
        clearInterval(this.update)
    }
   
    render() {
        document.title = 'Nikhil Roy PortFolio ----- Resume'
        return (
            <div className="container-fluid  text-light">
                <div className="row no-gutters no-gutters py-4 border_bottom_dotted">
                    <div className="col-12 mp_0">
                        <h2 className="mp_0">
                            Resume
                        </h2>
                    </div>
                   
                </div>
                <div className="row no-gutters no-gutters pt-4">
                    <h3 className="text-white">Nikhil Chandra Roy</h3>
                    <div className="description">
                        Having a great developer is little bit of tough but the Computer with Internet connection makes it cool to 
                        learn everything from Internet.
                        I have spend a lot of time to looking my knowledge and stand a row no-gutters to get the advantage of coding.
                        Visual Studio Code <img src={VS_icon} alt=""/> is my great Code Editor of my life.
                        Below the Source where I have learn and still keep to learning those sources.
                        <ol className="pt-2">
                            <li>W3Schools.Com</li>
                            <li>MDN Web Docs</li>
                            <li>Youtube Channels</li>
                            <li>Udemy Courses</li>
                            <li>StackOverflow (Question Solver)</li>
                            <li>CodePen (Inspiration) and more</li>
                        </ol>
                        I am grateful those people who serve me great tutorial and simple concept to understand clearly.
                        


                    </div>
                </div>
                <SkillHeader skilltitle="Application Language" />
                <AppLang/>

                <SkillHeader skilltitle="Language" />

                <div className="row no-gutters pt-4">
                    <div className="col-12 my-2">Bangla Native
                    <div className="range_slider">

                            <span style={{ width: this.state.rangeValue >= 95 ? '95%' : this.state.rangeValue + 3 + '%' }} className="range_scroll">

                                <span


                                    className="range_value"> {(this.state.rangeValue >= 95 ? "95" : this.state.rangeValue)}% </span>
                            </span>

                        </div>
                    </div>

                    <div className="col-12 my-2">English Second
                    <div className="range_slider">
                            <span style={{ width: this.state.rangeValue >= 72 ? '72%' : this.state.rangeValue + 3 + '%' }} className="range_scroll">

                                <span


                                    className="range_value"> {(this.state.rangeValue >= 80 ? "80" : this.state.rangeValue)}% </span>
                            </span>


                        </div>
                    </div>



                    <div className="col-12 my-2">Hindi Intermatiate
                    <div className="range_slider">

                            <span style={{ width: this.state.rangeValue >= 60 ? '60%' : this.state.rangeValue + 3 + '%' }} className="range_scroll">

                                <span


                                    className="range_value"> {(this.state.rangeValue >= 60 ? "60" : this.state.rangeValue)}% </span>
                            </span>

                        </div>
                    </div>
                </div>

                <SkillHeader skilltitle="Software and Tools" />
                <div className="row no-gutters pt-4">
                    <div className="col-12 my-2">SCSS (Css Preprocessor)
                    <div className="range_slider">

                            <span style={{ width: this.state.rangeValue >= 70 ? '70%' : this.state.rangeValue + 3 + '%' }} className="range_scroll">

                                <span


                                    className="range_value"> {(this.state.rangeValue >= 70 ? "70" : this.state.rangeValue)}% </span>
                            </span>


                        </div>
                    </div>

                    <div className="col-12 my-2">UI with Material UI (ReactJs)
                    <div className="range_slider">

                            <span style={{ width: this.state.rangeValue >= 69 ? '69%' : this.state.rangeValue + 3 + '%' }} className="range_scroll">

                                <span


                                    className="range_value"> {(this.state.rangeValue >= 68 ? "69" : this.state.rangeValue)}% </span>
                            </span>

                        </div>
                    </div>



                    <div className="col-12 my-2">Git Control with (Github Repository)
                    <div className="range_slider">

                            <span style={{ width: this.state.rangeValue >= 65 ? '65%' : this.state.rangeValue + 3 + '%' }} className="range_scroll">
                                <span


                                    className="range_value"> {(this.state.rangeValue >= 65 ? "65" : this.state.rangeValue)}% </span>
                            </span>

                        </div>
                    </div>

                    <div className="col-12 my-2">Photoshop
                    <div className="range_slider">
                            <span style={{ width: this.state.rangeValue >= 63 ? '63%' : this.state.rangeValue + 3 + '%' }} className="range_scroll">

                                <span


                                    className="range_value"> {(this.state.rangeValue >= 63 ? "63" : this.state.rangeValue)}% </span>
                            </span>


                        </div>
                    </div>
                </div>


            </div>
        )
    }
}

const SkillHeader = (props) => {
    return (
        <div className="row no-gutters py-4 border_bottom_dotted">
            <div className="col-6 mp_0">
                <h2 className="mp_0">
                    {props.skilltitle}
                </h2>
            </div>
            <div className="col-6 mp_0 text-right text-white-50">
                {/* <img src= alt=""/> */}
            </div>
        </div>
    )
}