import React, { useEffect } from "react";
import ScreenHeading from "../Utilities/ScreenHeading";
import ScrollService from "../Utilities/ScrollService";
import Animations from "../Utilities/Animations";
import "../../Styles/AboutMe.css";
import '../../Styles/Footer.css';
import Footer from './Footer';
import { faCodePullRequest } from "@fortawesome/free-solid-svg-icons";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTSANTS = {
    header:
      "About:",
    highlights: {
      bullets: [
        "full Stack Web and Mobile Developer",
        "Responsive + interactive Front End Design",
        "Data Maniulation for business automation and sales",
      ],
      heading: "Highlights:",
    },
    numbered: {
      summary: [
        "Javascript Web app developer based out of Frisco TX.",
        "I've been coding for a little over a year and a half.",
        "My current stack is: React, Firebase, Sass, D3.js.",
      ],
      heading: "summary",
    },
    passion: {
      focus: "I specialize in Sales-Process and Project-Management Automation for Business",
      heading: "Passion:",
    },
    education: {
      udemy: {
        studied: [
          {
            title: "Modern Javascript (Complete guide, from Novice to Ninja):",
            link: "https://www.udemy.com/certificate/UC-614b4bfb-b45e-4f39-a37e-3088af569e02/"
          },
          {
            title: "Build Web Apps with React + Firebase:",
            link: "https://www.udemy.com/certificate/UC-740f91e0-a45d-438d-8eb9-53426f4ebcfc/"
          },
          {
            title: "Build Data Visualizations with D3.JS and Firebase:",
            link: "https://www.udemy.com/certificate/UC-5125155b-2587-435b-9fdb-facfcbe56acb/"
          }
        ],
        currentlyStudying: {
          course1: {
            title: "Complete Next.js Developer in 2022: Zero to Mastery:",
          },
          heading: "I'm Currently Studying:"
        },
      },
      heading: "Udemy Courses I've Completed:",
    }
  };

  const renderHighlight = () => {
    return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  const renderOrderedList = () => {
    return SCREEN_CONSTSANTS.numbered.summary.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="numbers">
          <span className="ol">{i+1}. </span>
          <span className="ol-description">{value}</span>
        </div>
      </div>
    ));
  };

  const renderStudies = () => {
    return SCREEN_CONSTSANTS.education.udemy.studied.map((course, i) => (
      <>
        <div className="highlight" key={i}>
          <div className="numbers">
            <span className="ol-description">{i+1}. {course.title}</span>
          </div>
          <a href={course.link} className="course-link">Link</a>
        </div>
      </>
    ));
  };

  return (
    <div
      className="about-me-container screen-container"
    >
      <div className="about-me-parent fade-in"
      id={props.id || ""}>
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-title">
              {SCREEN_CONSTSANTS.header}
            </span>
            <div className="about-me-summary">
              {renderOrderedList()}
            </div>
            <br />
            <div className="about-me-title">
              <span className="highlight-heading">
                {SCREEN_CONSTSANTS.passion.heading}
              </span>
              <div className="about-me-focus">
                <span className="highlight ol-description">
                  {SCREEN_CONSTSANTS.passion.focus}
                </span>
              </div>
            </div>
            <br />
            <div className="about-me-education">
              <div className="about-me-studies">
                <div className="highlight-heading about-me-title">
                  <span>{SCREEN_CONSTSANTS.education.heading}</span>
                  <br />
                </div>
                {renderStudies()}
              </div>
              <div className="about-me-studied">
                <span className="highlight-heading about-me-title">
                  <span>{SCREEN_CONSTSANTS.education.udemy.currentlyStudying.heading}</span>
                </span><br />
                <span className="ol-description numbers">1. {SCREEN_CONSTSANTS.education.udemy.currentlyStudying.course1.title}</span>
              </div>
            </div>
            <div className="about-me-options">
              <button
                className="btn primary-btn big-hire"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                {" "}
                Hire Me{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}
