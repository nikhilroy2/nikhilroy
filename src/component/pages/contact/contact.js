import React, { Component } from 'react'



export default class Contact extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div className="container-fluid p-2 text-light ">
            <div className="row no-gutters py-4 border_bottom_dotted">
                <div className="col-12 mp_0">
                    <h2 className="mp_0">
                    Contact Me
                    </h2>
                </div>
                
            </div>
            <div className="row  no-gutters">
                <h3 className="text-center col-12 py-5">Lets Talk</h3>
            </div>

            <div className="row no-gutters">

                <FormField/>
            </div>

            </div>
        )
    }
}



function FormField() {
    return (
     <form action="" className="row no-gutters no-gutters w-100 mx-auto">
             <div className="col-sm-6 p-2">
                 <input type="text" placeholder=" Full Name" className=" bg-dark text-light border-0 outline-0 w-100 p-2" />
             </div>
             <div className="col-sm-6 p-2">
                 <input type="text" placeholder=" Email Address" className=" bg-dark text-light border-0 outline-0 w-100 p-2" />
             </div>
             <div className="col-12 p-2">
                 <textarea name="" placeholder="Description Here..." id="" rows="15" className=" bg-dark text-light border-0 outline-0 w-100 p-2"></textarea>
             </div>
             <div className="col-12 p-2">
                 <button type="submit" className=" bg-dark text-light border-0 outline-0  w-100 border-0 outline-0 p-2 d-block">Send Me</button>
             </div>
     </form>
    );
  }
