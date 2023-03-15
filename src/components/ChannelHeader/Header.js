import React from "react";
import { Link } from "react-router-dom";
import './HeaderStyle.css';

export default function Header() {
  return (
    <>
      <Link to="/"
        className="channelHeader"
        style={{
          backgroundSize: "cover"
        }}
      >
        <div className="channelName">
          <h1>
            Classroom Of The Elite Fan Translations
          </h1>
        </div>
        <div className="homebtn"><img src="https://img.icons8.com/material-sharp/24/null/home-page.png" alt="homebtn" /></div>
      </Link>
      <br />
      <br />
    </>
  );
} 