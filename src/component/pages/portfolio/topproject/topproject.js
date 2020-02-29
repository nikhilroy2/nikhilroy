import React from 'react';
import CardProject from '../cardproject/cardproject';
import puja_d from '../../../image/project_img/pujad.png';
import crypto from '../../../image/project_img/projectcrypto.png';
import rjgm_pic from '../../../image/project_img/Project-RJGM.png';
import flone_pic from '../../../image/project_img/flone.png';
import kids_pic from '../../../image/project_img/kids.png';
import polo_pic from '../../../image/project_img/polo.png';
import cuda_pic from '../../../image/project_img/cuda.png';
import reactjs_1 from '../../../image/project_img/ReactJS_1.png';
function TopProjectPost() {
    return (
        <div className="row no-gutters mp_0" style={{overflow: 'hidden'}}>
     
     <CardProject reposrc="https://github.com/nikhilroy2/ReactJs-Project-1" linksrc="https://nikhilroy2.github.io/ReactJs-Project-1/"  srcImg={reactjs_1} cardTitle="Full Project with ReactJS"/>
     <CardProject reposrc="https://github.com/nikhilroy2/ReactJs-Project-1" linksrc="https://nikhilroy2.github.io/Puja-D/"  srcImg={puja_d} cardTitle="Project Puja D OnePage Design"/>
     <CardProject reposrc="https://github.com/nikhilroy2/ReactJs-Project-1" linksrc="https://nikhilroy2.github.io/Project-Crypto"  srcImg={crypto} cardTitle="Project Crypto OnePage Design"/>
     <CardProject reposrc="https://github.com/nikhilroy2/ReactJs-Project-1" linksrc="https://nikhilroy2.github.io/Project-RJGM"  srcImg={rjgm_pic} cardTitle="Project RJGM OnePage Design"/>
     <CardProject reposrc="https://github.com/nikhilroy2/ReactJs-Project-1" linksrc="https://nikhilroy2.github.io/11-16-July-PortFolio-Page/"  srcImg={flone_pic} cardTitle="Project Flone Pic OnePage Design"/>
     <CardProject reposrc="https://github.com/nikhilroy2/ReactJs-Project-1" linksrc="https://nikhilroy2.github.io/Project-Kids-academy-page/"  srcImg={kids_pic} cardTitle="Project Kids Academy OnePage Design"/>
     <CardProject reposrc="https://github.com/nikhilroy2/ReactJs-Project-1" linksrc="https://nikhilroy2.github.io/Project-Polo/"  srcImg={polo_pic} cardTitle="Project Polo OnePage Design"/>
     <CardProject reposrc="https://github.com/nikhilroy2/ReactJs-Project-1" linksrc="https://nikhilroy2.github.io/PSD-TO-HTML-LEARNING-1-Cuda-Template/"  srcImg={cuda_pic} cardTitle="Project Cuda from psd template design"/>
   </div>
    )
}

export default TopProjectPost;
