import React from "react";
import './FooterStyle.css';
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";

export default function Footer() {
  return (
    <>
      <div className="ChannelFooter">
        <div className="footerInfo">
          <div className="channel-info">
            <h1>Anime Anyway</h1>
            <h3>Channel for all Classroom of elite novel and translation</h3>
            {/* <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nisi voluptatum nulla eligendi doloribus recusandae voluptates minima incidunt ducimus quo exercitationem, corrupti laboriosam illo libero, sequi, quae optio deleniti consequatur?</h3> */}
          </div>
          <div className="creator-info">
            <div className="channel-link">
              <h2>Follow Us</h2>
              <a
                href="https://www.instagram.com/anime_anyway_/?igshid=1ch5mp9tspotz"
                target="_blank"
              >
                <div className="links">
                  <h4>Instagram</h4>
                  <InstagramIcon className="icons" />
                </div>
              </a>
              <a
                href="https://www.youtube.com/@ANIMEANYWAY/about"
                target="_blank"
              >
                <div className="links">
                  <h4>Youtube</h4>
                  <YouTubeIcon className="icons" />
                </div>
              </a>
              <a href="https://t.me/animeanyway" target="_blank">
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
                Asplay
              </h3>
              {/* <h2 style={{ fontSize: "20px", marginTop: "-20px" }}>
                Developer Company
              </h2> */}
              <h4 style={{ fontSize: "20px", marginTop: "-35px" }}>
                Developer Contact 
              </h4>
              <h4
                style={{
                  fontSize: "20px",
                  marginTop: "-10px",
                  marginLeft: "-35px",
                  color: "rgba(255, 255, 255, 0.885)",
                }}
              >
                services@asplay.tech
              </h4>
              <h4
                style={{
                  fontSize: "20px",
                  marginTop: "-10px",
                  marginLeft: "-35px",
                  color: "rgba(255, 255, 255, 0.885)",
                }}
              >
                support@asplay.tech
              </h4>
            </div>
          </div>
        </div>
        <div className="lastImage"></div>
        {/* wavey part */}
        {/* <div class="custom-shape-divider-top-1671373515">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                class="shape-fill"
              ></path>
            </svg>
          </div> */}
      </div>
    </>
  );
}