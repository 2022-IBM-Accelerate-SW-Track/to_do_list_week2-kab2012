import React, { Component } from 'react';
import "./About.css";
import profile_pic from "../assets/profile_pic.jpg";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div>
        <div class="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src={profile_pic}
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Kimberly Brown</div>
            <div className="brief_description">
              <div className="category_heading">Interests</div>
                <div className="category_text">
                  <ul><li>Reading</li><li>Walking</li><li>Cooking</li></ul>
                  </div>
              <div className="category_heading">Fun Facts</div>
                <div className="category_text">
                    <ul><li>I used to have a pet fish.</li>
                    <li>I love to visit the mountains of NC.</li>
                    <li>I enjoy learning about history.</li></ul>
                    </div>
            </div>
          </div>
        </div>
      </div> 
      </div>
    )
  }
}