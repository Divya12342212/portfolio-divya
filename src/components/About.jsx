import React from 'react';
import '../App.css';
import img from "../assets/img.jpeg"

const About = () => {
  return (
    <div className="about-container">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 about-text">
          <h1>About Me</h1>
          <p>
            Hello! I'm <strong> Divya</strong>, and im a BCA student and until now i have been learned the UI by UX course and
            now im in with Front End development. And im early now started  BCA and i dont have that much idea about any skills   
          </p>
          <p>
            ""I am [Divya], a passionate and dedicated student currently pursuing my Bachelor of Computer Applications (BCA) at KLE College,
             Gangavthi. I am in my [2nd/3rd] year and am excited to further enhance my skills and knowledge in the field of computer 
             applications.


          </p>0
          <p>
            Let’s build something amazing together!
          </p>
        </div>
        
        <div className="col-12 col-md-6 text-center">
          <img src={img} alt="Vamsi Paidi" className="about-image img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default About;