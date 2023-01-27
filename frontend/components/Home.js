import React from 'react';
import { Link } from 'react-router-dom';

export default function Home(props) {
  let mystyle = {
    color: props.mode === 'dark' ? 'white' : '#363636',
    backgroundColor: props.mode === 'dark' ? '#363636' : 'white',
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <img src="/home7.png" alt="Logo" id="logo-img3" height="120" />
        </div>
        <div className="col-6">
          <img src="/vid-click.png" alt="Logo" id="logo-img" height="250" />
        </div>
        <div className="col">
          <img src="/home7.png" alt="Logo" id="logo-img4" height="120" />
        </div>
      </div>
      <div className="landing-inner text-center" style={mystyle}>
        <div className="row">
          <div className="col">
            <img src="/home2.jpg" alt="Logo" id="logo-img1" height="150" />
            <img src="/home1.jpg" alt="Logo" id="logo-img1" height="150" />
            <img src="/home3.jpg" alt="Logo" id="logo-img1" height="150" />
          </div>
          <div className="col">
            <h1 className="x-large title">V-INDEX</h1>
            <p className="slogan">Automatic Video Indexing and Retrieval.</p>
            <Link to="/search">
              <button className="home-button"> Watch </button>
            </Link>
            <Link to="/upload">
              <button className="home-button" style={{ fontSize: '27px' }}>
                Upload
              </button>
            </Link>
          </div>
          <div className="col">
            <img src="/home4.jpg" alt="Logo" id="logo-img2" height="150" />
            <img src="/home6.jpg" alt="Logo" id="logo-img2" height="150" />
            <img src="/home5.jpg" alt="Logo" id="logo-img2" height="150" />
          </div>
        </div>
      </div>
    </div>
  );
}
