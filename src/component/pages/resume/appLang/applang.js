import React from 'react';

class AppLang extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            rangeValue: 0,
            currentValue: 0
        }
    }
    componentDidMount() {
       this.update =  setInterval(() => {
            this.state.currentValue++;
            this.setState({
                rangeValue: this.state.currentValue
            })
        }, 40)
    }

    componentWillUnmount(){
        clearInterval(this.update)
    }

    render(){
    return (
        <div className="row pt-4">
                    <div className="col-12 my-2">HTML
                    <div className="range_slider">
                            <span style={{ width: this.state.rangeValue >= 80 ? '80%' : this.state.rangeValue + 3 + '%' }} className="range_scroll">


                                <span className="range_value">
                                    {(this.state.rangeValue >= 80 ? "80" : this.state.rangeValue)}% </span>
                            </span>


                        </div>
                    </div>
                    <div className="col-12 my-2">CSS
                    <div className="range_slider">
                            <span style={{ width: this.state.rangeValue >= 90 ? '90%' : this.state.rangeValue + 3 + '%' }} className="range_scroll">

                                <span


                                    className="range_value"> {(this.state.rangeValue >= 90 ? "90" : this.state.rangeValue)}% </span>
                            </span>


                        </div>
                    </div>
                    <div className="col-12 my-2">JAVASCRIPT
                    <div className="range_slider">

                            <span style={{ width: this.state.rangeValue >= 70 ? '70%' : this.state.rangeValue + 3 + '%' }} className="range_scroll">

                                <span


                                    className="range_value"> {(this.state.rangeValue >= 70 ? "70" : this.state.rangeValue)}% </span>
                            </span>


                        </div>
                    </div>
                    <div className="col-12 my-2">JQUERY
                    <div className="range_slider">

                            <span style={{ width: this.state.rangeValue >= 60 ? '60%' : this.state.rangeValue + 3 + '%' }} className="range_scroll">

                                <span


                                    className="range_value"> {(this.state.rangeValue >= 60 ? "60" : this.state.rangeValue)}% </span>
                            </span>


                        </div>
                    </div>
                    <div className="col-12 my-2">REACTJS
                    <div className="range_slider">
                            <span style={{ width: this.state.rangeValue >= 75 ? '75%' : this.state.rangeValue + 3 + '%' }} className="range_scroll">

                                <span


                                    className="range_value"> {(this.state.rangeValue >= 75 ? "75" : this.state.rangeValue)}% </span>
                            </span>

                        </div>
                    </div>

                    <div className="col-12 my-2">Bootstrap
                    <div className="range_slider">

                            <span style={{ width: this.state.rangeValue >= 72 ? '72%' : this.state.rangeValue + 3 + '%' }} className="range_scroll">

                                <span


                                    className="range_value"> {(this.state.rangeValue >= 72 ? "72" : this.state.rangeValue)}% </span>
                            </span>

                        </div>
                    </div>
                </div>
    )
}
}
export default AppLang;
