import React from 'react';

import meter3 from "../assets/img/ui-ux.png";
import meter4 from "../assets/img/react.png";
import meter5 from "../assets/img/js.jpg";
import meter6 from "../assets/img/mern.png";
import meter8 from "../assets/img/mobdev.webp";
import meter9 from "../assets/img/firebase.jpg";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
<script async defer src="https://buttons.github.io/buttons.js"></script>

export const Testnet = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="testnet" id="testnet">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2> My Skills✨</h2>
                        <p>Will be adding more to this list </p>
                        
                        <br></br>
                        <br></br>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                        <div className="item">
                             <img src={meter3} alt="Image" />
                              <h5>UI/UX</h5>
                            </div>
                           
                        <div className="item">
                             <img src={meter4} alt="Image" />
                              <h5>React.js</h5>
                            </div>
                        <div className="item">
                             <img src={meter5} alt="Image" />
                              <h5>Java Script</h5>
                            </div>
                        <div className="item">
                             <img src={meter6} alt="Image" />
                              <h5>MERN STACK DEVELOPMENT</h5>
                            </div>
                        <div className="item">
                             <img src={meter8} alt="Image" />
                              <h5>MOBILE DEVELOPMENT</h5>
                            </div>
                        <div className="item">
                             <img src={meter9} alt="Image" />
                              <h5>FIREBASE</h5>
                            </div>
                           
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
  
}
