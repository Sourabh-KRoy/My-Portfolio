import React from 'react';
import './Project.css'

const Project = () => {
  return (
    <div className="projects">
    <div className="container">
      <h1 className="sub-title">
        My <span>Projects</span>
      </h1>
      <div className="project-list">
        <div className="project-card">
          <img src="path/to/project1-image.jpg" alt="Project 1" className="project-image" />
          <h2>Project One</h2>
          <p>
            A brief description of the first project. This could include key features and technologies used.
          </p>
          <a href="#" className="read">
            Learn More
          </a>
        </div>
        <div className="project-card">
          <img src="path/to/project2-image.jpg" alt="Project 2" className="project-image" />
          <h2>Project Two</h2>
          <p>
            A brief description of the second project. Highlight significant achievements or challenges overcome.
          </p>
          <a href="#" className="read">
            Learn More
          </a>
        </div>
        <div className="project-card">
          <img src="path/to/project3-image.jpg" alt="Project 3" className="project-image" />
          <h2>Project Three</h2>
          <p>
            A brief description of the third project. Mention the impact or results achieved.
          </p>
          <a href="#" className="read">
            Learn More
          </a>
        </div>
        <div className="project-card">
          <img src="path/to/project4-image.jpg" alt="Project 4" className="project-image" />
          <h2>Project Four</h2>
          <p>
            A brief description of the fourth project.
          </p>
          <a href="#" className="read">
            Learn More
          </a>
        </div>
        <div className="project-card">
          <img src="path/to/project5-image.jpg" alt="Project 5" className="project-image" />
          <h2>Project Five</h2>
          <p>
            A brief description of the fifth project.
          </p>
          <a href="#" className="read">
            Learn More
          </a>
        </div>
        <div className="project-card">
          <img src="path/to/project6-image.jpg" alt="Project 6" className="project-image" />
          <h2>Project Six</h2>
          <p>
            A brief description of the sixth project.
          </p>
          <a href="#" className="read">
            Learn More
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Project
