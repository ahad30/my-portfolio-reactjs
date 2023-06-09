import React from "react";
import { Container} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import "./resume.css";

const Resume = () => {
  return (
    
      <Container>
<section className="resume container section" id="resume">
      <h2 className="section__title">Resume</h2>
        <div className="resume-section grid">
          <div className="resume-left-col">
            <h3>Education</h3>
            <div className="resume-item">
              <div className="resume-item-heading">
                <FontAwesomeIcon icon={faGraduationCap} className="resume-icon" />
                <h4>Bachelor of Electrical Engineering</h4>
                <p className="resume-date">2018 - 2022</p>
              </div>
              <div className="resume-item-body">
                <h5>Port City International University</h5>
                <p className="resume-item-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            <div className="resume-item">
              <div className="resume-item-heading">
                <FontAwesomeIcon icon={faGraduationCap} className="resume-icon" />
                <h4>Higher Secondary School</h4>
                <p className="resume-date">2015 - 2017</p>
              </div>
              <div className="resume-item-body">
                <h5>Ispahani Public School & College</h5>
                <p className="resume-item-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>

          <div className="resume-right-col">
            <h3>Experience</h3>
            <div className="resume-item">
              <div className="resume-item-heading">
                <FontAwesomeIcon icon={faBriefcase} className="resume-icon" />
                <h4>Web Development Intern</h4>
                <p className="resume-date">Jan'23-Jun'23</p>
              </div>
              <div className="resume-item-body">
                <h5>Carriastic</h5>
                <p className="resume-item-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            <div className="resume-item">
              <div className="resume-item-heading">
                <FontAwesomeIcon icon={faBriefcase} className="resume-icon" />
                <h4>Software Developer</h4>
                <p className="resume-date">2022-2023</p>
              </div>
              <div className="resume-item-body">
                <h5>GAOTEK INC.</h5>
                <p className="resume-item-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>

    </div>
    </section>
    </Container>
  );
};

export default Resume;
