import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/ecomweb.jpg";
import projImg2 from "../assets/img/monsters.png";
import projImg3 from "../assets/img/ping-pong.png";
import projImg4 from "../assets/img/nasaapod.jpg";
import projImg5 from "../assets/img/rock.png";
import projImg6 from "../assets/img/quotes.jpg";
import projImg7 from "../assets/img/jokes.jpg";
import projImg8 from "../assets/img/bookmark.png";
import projImg9 from "../assets/img/math.png";
import projImg10 from "../assets/img/countdown.jpg";
import projImg11 from "../assets/img/pop.jpg";
import projImg12 from "../assets/img/music.png";
import projImg13 from "../assets/img/video.jpg";
import projImg14 from "../assets/img/todo.jpg";
import projImg15 from "../assets/img/paint.jfif";
import projImg16 from "../assets/img/landing.png";
import projImg17 from "../assets/img/darkjpg.jpg";
import projImg18 from "../assets/img/unsplash.jfif";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "E-Commerce Website",
      description: "Crown-Clothing",
      imgUrl: projImg1,
      link: "https://github.com/c-osm0/Crown-Clothing-E-Commerce-Website",
    },
    {
      title: "Monsters-Roblodex",
      description: "Search monsters",
      imgUrl: projImg2,
      link: "https://github.com/c-osm0/Monsters-Finder-fun-app",
    },
    {
      title: "Ping-Pong Game",
      description: "Open and play against computer",
      imgUrl: projImg3,
      link: "https://github.com/c-osm0/Classic-Pong-Game",
    },
    {
      title: "NASA APOD",
      description: "Collection of NASA APOD with articles to read",
      imgUrl: projImg4,
      link: "https://github.com/c-osm0/NASA-APOD-WEBSITE",
    },
    {
      title: "Rock,Paper,Scissors,lizard and Spock",
      description: "Wanna Play? just click !!",
      imgUrl: projImg5,
      link: "https://github.com/c-osm0/Rock-Paper-Scissors-Lizard-Spock-Game",
    },
    {
      title: "Quote Generate",
      description: "Quotes Showcase from legends",
      imgUrl: projImg6,
      link: "https://github.com/c-osm0/Quote-Generator-Responsive-Website",
    },
    {
      title: "Joke Teller",
      description: "Awesome jokes to listen",
      imgUrl: projImg7,
      link: "https://github.com/c-osm0/Joke-Teller-Smart-Website",
    },
    {
      title: "Bookmark Keeper",
      description: "You wanna save your favourite websites?? Click here!",
      imgUrl: projImg8,
      link: "https://github.com/c-osm0/Bookmark-Keeper",
    },
    {
      title: "Math Quiz Game",
      description: "Wanna test your math skills? Open and take my challenge!",
      imgUrl: projImg9,
      link: "https://github.com/c-osm0/Math-Sprint-Game",
    },
  ];
  const projects2 = [
    {
      title: "Coutdown App",
      description: "Dont forget you precious moments, just give a countdown to it and chill!!",
      imgUrl: projImg10,
      link: "https://github.com/c-osm0/Custom-Countdown",
    },
    {
      title: "Picture in Picture(POP)",
      description: "Multitasking is fun, just give it a try!!",
      imgUrl: projImg11,
      link: "https://github.com/c-osm0/Custom-Countdown",
    },
    {
      title: "Music Player",
      description: "Music is always fun, isn't it?",
      imgUrl: projImg12,
      link: "https://github.com/c-osm0/Music-Player",
    },
    {
      title: "Video Player",
      description: "A world class Video-Player. Don't believe? Try and find out yourself.",
      imgUrl: projImg13,
      link: "https://github.com/c-osm0/Music-Player",
    },
    {
      title: "Drag and Drop",
      description: "Keep in touch with what items todo and what not to!",
      imgUrl: projImg14,
      link: "https://github.com/c-osm0/Drag-and-Drop",
    },
    {
      title: "Paint Clone",
      description: "Everyone loves to draw stuffs and paint!! Don't you?",
      imgUrl: projImg15,
      link: "https://github.com/c-osm0/Drag-and-Drop",
    },
    {
      title: "Animated Landing Page",
      description: "Animations are always fun. Sample Landing page with interesting animations!",
      imgUrl: projImg16,
      link: "https://github.com/c-osm0/Animated-Sample-Landing-Page-",
    },
    {
      title: "Light-Mode/Dark-Mode",
      description: "Easy way to switch from Light Mode to Dark Mode!!",
      imgUrl: projImg17,
      link: "https://github.com/c-osm0/Light-Mode-Dark-mode-Website",
    },
    {
      title: "Infinite Scroll App",
      description: "Unsplash website random images to view from!",
      imgUrl: projImg18,
      link: "https://github.com/c-osm0/Infinite-Scroll-Website-using-unsplash-API",
    },

  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Welcome to my Projects gallary!! 
                  Feel free to click any Project to view its Github repository.
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects2.map((project2, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project2}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Coming Soon!!!!! 
                        Please be patient.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
