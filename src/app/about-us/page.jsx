
import VerbyoCommon from "../components/common/VerbyoCommon";
import "./about.css"
import React from 'react'

export const metadata = {
  title: "About Us",
};
const about = () => {
  return (
    <div className="max-w-[1240px] w-full mx-auto mt-[30px] h-screen">
      <div className="about-section">
        <h1>About Us Page</h1>
        <p>Hey! My name is Abdullah and i am a student in ICT dublin College UK</p>
        <p>
          Now currently i am working on website developing
        </p>
      </div>
      <h2 className="heading">Our Team</h2>
      <div className="rowTeam">
        <div className="columnTeam">
          <div className="cardTeam">
            <img
              src="Classic Felt.jpg"
              alt="Jane"
              style={{ width: "100%" }}
            />
            <div className="containerTeam">
              <h2>Abdullah</h2>
              <p className="titleTeam">CEO & Founder</p>
              <p>He built the website in 2024 as a CEO & Founder.</p>
              <p>Abdullah@example.com</p>
              <p>
                <button className="buttonTeam">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="columnTeam">
          <div className="cardTeam">
            <img
              src="Classic Felt.jpg"
              alt="Mike"
              style={{ width: "100%" }}
            />
            <div className="containerTeam">
              <h2>Miss Ross</h2>
              <p className="titleTeam"> Director</p>
              <p>She has been working as a Directer since 22024.</p>
              <p>Ross@example.com</p>
              <p>
                <button className="buttonTeam">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="columnTeam">
          <div className="cardTeam">
            <img
              src="Classic Felt.jpg"
              alt="John"
              style={{ width: "100%" }}
            />
            <div className="containerTeam">
              <h2>Miss Dawson</h2>
              <p className="titleTeam">Designer</p>
              <p>She has been working as a Designer since 2024.</p>
              <p>Dawson@example.com</p>
              <p>
                <button className="buttonTeam">Contact</button>
              </p>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default about;


