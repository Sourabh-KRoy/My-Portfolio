import React from 'react'
import './Services.css'

const Services = () => {
    return (
        <div className="service">
        <div className="container">
          <h1 className="sub-title">
            My <span>Services</span>
          </h1>
          <div className="service-list">
            <div>
              <i className="bx bx-code" style={{ color: "#00eeff" }} />
              <h2>Front-End Development:</h2>
              <p>
                Create responsive and interactive user interfaces using HTML, CSS, and
                JavaScript frameworks (like React or Angular).
              </p>
              <a href="#" className="read">
                learn more
              </a>
            </div>
            <div>
              <i className="bx bxl-java" style={{ color: "#00eeff" }} />
              <h2>Back-End Development</h2>
              <p>
                Develop robust server-side applications using Java, Spring Boot, Node js, Express js and
                related technologies.
              </p>
              <a href="#" className="read">
                learn more
              </a>
            </div>
            <div>
              <i className="bx bxl-android" style={{ color: "#00eeff" }} />
              <h2>Android App Development</h2>
              <p>
                Build and integrate RESTful APIs for seamless communication between
                front-end and back-end systems.
              </p>
              <a href="#" className="read">
                learn more
              </a>
            </div>
          </div>
        </div>
      </div>
      

    )
}

export default Services
