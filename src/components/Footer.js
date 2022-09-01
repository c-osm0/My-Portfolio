import React from 'react';

import { Container, Row, Col } from "react-bootstrap";

import navIcon3 from '../assets/img/linkedin.svg';
import navIcon2 from "../assets/img/github.svg";


import foot from '../assets/img/foot.jpg';

import 'animate.css';


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col>
         <div>Copyright © 2022 Aryan Raj. All Rights Reserved.</div>
         </Col>
          <Col>
         <div className='footimg'><img src={foot} alt="image"  /></div>
         </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/aryan-raj-32490722a/" target="_blank"><img src={navIcon3} alt="LinkedIn" /></a>
                <a href="https://github.com/c-osm0"target="_blank"><img src={navIcon2} alt="Github" /></a>
               
            </div>
            <p>❤️ </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
