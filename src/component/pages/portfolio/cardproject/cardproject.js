import React from 'react';
import './cardproject.css';

function CardProject(props) {
  return (

    
    <div className="col-lg-6 m-0 p-2 project_card">
      <div className="card">
        <div className="card-body " style={{ background: '#444' }}>
          <h5 style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
            
            <a target="_blank" href={props.linksrc} className="text-light" >

            {props.cardTitle}
          </a></h5>
        </div>
        <div className="img_wrapper">
          <img className="card-img-top" src={props.srcImg} alt="" />
          <a target="_blank" href={props.reposrc} className="repo">Github Repository</a>
        </div>

      </div>
    </div>
  )
}


export default CardProject;
