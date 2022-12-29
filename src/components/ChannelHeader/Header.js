import React from "react";
import './HeaderStyle.css';
import headerImage from "../../cl2-header.png"

export default function Header(){
    return (
      <>
        <div
          className="channelHeader"
          style={{
            background:`url(${headerImage}) "linear-gradient(to bottom,rgba(255, 255, 255, 0) 0%,rgba(0, 0, 0, 0.2) 30%,rgba(0, 0, 0, 0.4) 55%,rgba(0, 0, 0, 0.2) 90%,rgba(255, 255, 255, 0) 100%)"`,backgroundRepeat:"no-repeat",backgroundSize:"cover"
          }}
        > 
          <div className="channelName">Anime Anyway</div>
          {/* wavey part */}
          {/* <div class="custom-shape-divider-bottom-1671370168">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              class="shape-fill" 
            ></path>
          </svg>
          </div> */}
        </div>
      </>
    );
} 