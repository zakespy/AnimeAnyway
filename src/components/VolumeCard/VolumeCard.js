import React from "react";
import '../VolumeCard/VolumeCardStyle.css'


export default function VolumeCard({card}) {
  return (
    <>
    {console.log(card)}
      <div className="center">
        <div className="property-card">
          <a href="#">
            <div className="property-image">
              <div className="property-image-title">
                {/* <!-- Optional <h5>Card Title</h5> If you want it, turn on the CSS also. --> */}
              </div>
            </div>
          </a>
          <div className="property-description">
            <h5> {card.e.name} </h5>
            {/* <p>
              Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More
              Bingo. Lorem Ipum doth be hard.
            </p> */}
          </div>
          <a href="#">
            <div className="property-social-icons">
                <div className="read-button">
                    Read
                </div>
              {/* <!-- I would usually put multipe divs inside here set to flex. Some people might use Ul li. Multiple Solutions --> */}
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
