import React from "react";
import "../style.css";
import { Link } from "react-router-dom";

import { useEffect } from "react";
import AOS from "aos";

export function About() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
}, []);
  return (
    <div className="about_us"  data-aos="fade-up">

      <div className="first_box">
        <div className="grey_box">
          <img src="./images/lap.png" alt="" />
        </div>
      </div>

      <div className="second_box"  data-aos="fade-up">
        <div className="details_abu">
          <h5 className="title_one">
            About Me <span></span>
          </h5>
          <p>Hi, This is Abhi. Mobile Application Developer with 6+ years of
            experience indeveloping apps and built more than 85 applications for
            different industries. Hands-on experience in Native & Hybrid app
            development. Ability with Kotlin & Swift for Native IOS & Android &
            React Native and Flutter for cross platform</p>
          <p>I offer a comprehensive package of tech-savvy services clubbed with
            innovative solutions. I hold expertise in Mobile Application
            Development, App Design, and emerging technologies. Being the
            leader, it is my responsibility to nurture the business of my prestigious
            clients. With this mission, I dedicatedly work for delivering impactful
            results. So it’s time for you to grow with me</p>
          <Link to="/" className="homie">Read More <span></span> </Link>
        </div>
      </div>

    </div>
  );
}
