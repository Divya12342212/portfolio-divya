import React from 'react';

import img from '../assets/img.jpeg'

const Home = () => {
  return (
    <>
      <div className="container-fluid home-container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 text-section">
            <h1 className="title">Hi, This is Divya reddy</h1>
            <h5 className="subtitle">And I'm A BCA student</h5>
            <p className="description">
              Im more interested in the topics of icecream.
            </p>
          </div>
          <div className="col-12 col-md-6 text-center image-section">
            <img src={img} alt="Profile-photo" className="profile-img img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;