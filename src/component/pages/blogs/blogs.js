import React, { Component } from 'react';
import { Router, Link, Switch, useRouteMatch } from 'react-router-dom';
export default function Blogs(){     
    const match = useRouteMatch();

    document.title = 'Nikhil Roy PortFolio ----- Blogs'
        return (

            <div className="container-fluid px-2 text-light">
                <div className="row no-gutters py-4 border_bottom_dotted">
                    <div className="col-12 mp_0">
                        <h2 className="mp_0 ">
                            Latest Blogs
                </h2>
                    </div>
                  
                </div>
               <PostListing/>
           

             


            </div>


        )
}


const PostListing = ()=> {
   return (
    <div className="row pt-3 no-gutters">

    <PostItem
    postTitle="
    
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, numquam. Voluptates, vero. Quidem velit quod voluptates laudantium ea! Deserunt tempora provident voluptatem, doloremque voluptate aut.
    "
    />

    
<PostItem
    postTitle="
    
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, numquam. Voluptates, vero. Quidem velit quod voluptates laudantium ea! Deserunt tempora provident voluptatem, doloremque voluptate aut.
    "
    />

    
<PostItem
    postTitle="
    
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, numquam. Voluptates, vero. Quidem velit quod voluptates laudantium ea! Deserunt tempora provident voluptatem, doloremque voluptate aut.
    "
    />


</div>
   )

}

const PostItem = (props) => {
    return (
        <div className="col-12 p-1 shadow rounded-lg ">

            <div className="row no-gutters m-0 p-0">
                <div className="col-3 col-sm-2">
                    <div className="h-100 bg-dark d-flex justify-content-center align-items-center">
                        <p className="display-4 px-2">
                        {"</>"}
                        </p>
                    </div>
                </div>
                <div style={{ background: '#444' }} className="col-9 col-sm-10 card text-light">

                    <div className="card-body">
                        <p className="card-text">
                            <Link to="/post1" className="text-light">{props.postTitle}</Link></p>
                    </div>
                    <div className="card-footer  text-white-50">
                        Post Date: {document.lastModified}
                    </div>
                </div>

            </div>
        </div>
    )
}















///



