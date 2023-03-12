import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import React from "react";
import banner from './channels4_banner(1).jpg';
import './FooterStyle.css';

export default function Footer() {
  return (
    <>
      <div className="ChannelFooter">
        <div className="footerInfo">
          <div className="channel-info">
            <h1>Anime Anyway</h1>
            <h3>Channel for all Classroom of the elite novel translations</h3>
          </div>
          <div className="creator-info">
            <div className="channel-link">
              <h2>Follow Us</h2>
              <a
                href="https://www.instagram.com/anime_anyway_/?igshid=1ch5mp9tspotz"
                target="_blank"
                rel="noreferrer"
              >
                <div className="links">
                  <h4>Instagram</h4>
                  <InstagramIcon className="icons" />
                </div>
              </a>
              <a
                href="https://www.youtube.com/@ANIMEANYWAY/about"
                target="_blank"
                rel="noreferrer"
              >
                <div className="links">
                  <h4>Youtube</h4>
                  <YouTubeIcon className="icons" />
                </div>
              </a>
              <a href="https://t.me/animeanyway" target="_blank" rel="noreferrer">
                <div className="links">
                  <h4>Telegram</h4>
                  <TelegramIcon className="icons" />
                </div>
              </a>
            </div>
            <div
              className="developer-link"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <h3
                style={{
                  fontFamily: "Dancing Script, cursive",
                  fontSize: "45px",
                  marginTop: "0px",
                }}
              >
                Evoliq
              </h3>
              <h4 style={{ fontSize: "20px", marginTop: "-35px" }}>
                Developer Contact
              </h4>
              {/* <h4
                style={{
                  fontSize: "20px",
                  marginTop: "-10px",
                  marginLeft: "-35px",
                  color: "rgba(255, 255, 255, 0.885)",
                }}
              >
                services@asplay.tech
              </h4> */}
              <a
                href="https://www.instagram.com/_evoliq_/?next=%2F"
                target="_blank"
                rel="noreferrer"
              >
                <div className="developer-insta-links">
                  <h4>_evoliq_</h4>
                  <InstagramIcon className="icons" />
                </div>
              </a>
            </div>
          </div>
        </div>
        <img src={banner} alt="banner"></img>
      </div>
    </>
  );
}