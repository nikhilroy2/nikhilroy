import React from 'react';
import './App.css';
import Header from './component/home/header/header';
import Home from './component/home/home';
import Settings from './component/settings/settings';
import { BrowserRouter as Nikhil, Route, Switch } from 'react-router-dom';


// Pages Router Import
import About from './component/pages/about/about';
import Resume from './component/pages/resume/resume';

import Blogs from './component/pages/blogs/blogs';
import Contact from './component/pages/contact/contact';
import PortFolio from './component/pages/portfolio/portfolio';
// import PageNotFound from './component/pages/pagenotfound/pagenotfound';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      divs: []
    }
    this.NikhilMouse.bind(this);

  }

  componentDidMount() {

    this.update = setInterval(() => {
      let img = document.querySelectorAll('img');
      img.forEach(i => i.addEventListener('mousemove', (e) => {
        i.style.objectPosition = `center 100%`
      }));

      
    })






    // for background music

    // let nikhilMusic = new Audio;
    // nikhilMusic.src = 'https://cf-media.sndcdn.com/Rbhwki5R8qyP.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vUmJod2tpNVI4cXlQLjEyOC5tcDMiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1ODI3MjQ3MjF9fX1dfQ__&Signature=Jz2DIP~PVzgYqGQvYLhSS1KuWamlRhf1uIurrqqHUJQZn~fufiGwtDAHuH~K8Kj-ofCDj~RhidhsOXTO8E-VcsXgoDwx6bnodmh-q1u~~2NL0Ab8phPLBs4GQOntpmj0p1fmvP6BU1JLFLD8MoLvjCHT7d7x16RKD6udFxWWa-HooMppdYqWNQ0-zW3gMBp42OnOpFTne7nMi0pvi4RQm~RI8MSvH-ht0J79pHOC1Gp9GbzZE2e22FaW0QXYJUMRZ1XiJ2dHJQOEGMwE2-u6olqHk3Nq11ALANpVc-nx7AbyQCY6RdkKV66UXUupBTYdKRW5Ypm-By1tY5J7Mrq4og__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ';
    // nikhilMusic.play();
    // nikhilMusic.volume = .2

    // for background mousemove effect
    document.addEventListener('mousemove', this.NikhilMouse.bind(this));

  }

  componentWillUnmount(){
    clearInterval(this.update)
  }
  NikhilMouse(e) {
    let bgStyle = ['red', 'green', 'blue', 'yellow', 'pink', 'hotpink', 'white', 'black', 'orange', 'peru'];

    let style = {
      width: `${Math.floor(Math.random() * 20)}px`,
      height: `${Math.floor(Math.random() * 20)}px`,
      background: bgStyle[Math.floor(Math.random() * (bgStyle.length))],
      position: 'fixed',
      animation: '3s linear moveEffect forwards',
      zIndex: '100000',
      borderRadius: `${Math.floor(Math.random() * 50)}%`,
      pointerEvents: 'none',
      top: `${e.clientY}px`,
      left: `${e.clientX}px`
    };
    let span = <span id="moveSpan" key={Math.random()} style={style} />;


    this.setState(prevDivs => ({
      divs: [...prevDivs.divs, span]
    }));


    let moveSpan = document.querySelectorAll('#moveSpan');
    moveSpan.forEach(i => i.addEventListener('animationend', () => i.remove()))



  }



  render() {


    return (
      <React.Fragment>
        {this.state.divs}
        <Nikhil >





          <Header />
          <div className="m--0 ml_250px bg_bg_linear h_100mvh">


            <Switch>
              <Route path="/" exact > <Home /> </Route>
              <Route path="/about_me"> <About />  </Route>
              <Route path="/resume"> <Resume />  </Route>
              <Route path="/portfolio">  <PortFolio /> </Route>
              <Route path="/blogs"> <Blogs /> </Route>
              <Route path="/contact"> <Contact /> </Route>
              {/* Its 404 page I will modify later */}
              <Route > <Home /> </Route>

            </Switch>

          </div>
          {/* <Settings /> */}




        </Nikhil>

      </React.Fragment>

    )
  }
}

export default App;
