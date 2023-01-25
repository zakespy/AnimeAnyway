import React, { useState } from "react";
import { Link } from "react-router-dom";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import '../VolumeCard/VolumeCardStyle.css'
// import '../../assets/images/back1.jpg'


export default function VolumeCard({card, index}) {

  // const imageURl = React.lazy(() => import("../../assets/images/back1.jpg"));
  // console.log(imageURl)

  // const style = () => ({
  //   backgroundImage: "url(../../assets/images/back1.jpg)",
  //   backgroundRepeat: "no-repeat",
  //   backgroundSize: "cover",
  // });

  return (
    <>
      {/* {console.log(card)} */}
      <div className="center">
        <div className="property-card">
          {/* <a href="#"> */}
          <div
            className="property-image"
            style={{
              // backgroundImage: `url("${card.e.image}")`,
              backgroundImage: `url(${card.e.image})`,
              // backgroundImage: "url(../../assets/images/back1.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            // style={style()}
          >
            {console.log(card.e.image)}
            <div className="property-image-title">
              {/* <!-- Optional <h5>Card Title</h5> If you want it, turn on the CSS also. --> */}
            </div>
          </div>
          {/* </a> */}
          <div className="property-description">
            <h5> {card.e.name} </h5>
            {/* <p>
              Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More
              Bingo. Lorem Ipum doth be hard.
            </p> */}
          </div>
          <div className="property-social-icons">
            <a href="#">
              <div className="read-button">
                <Link
                  to={`/read?volume=${index}`}
                  state={{ path: card.e.path }}
                  className="downloadbutton"
                >
                  Read
                </Link>
              </div>
            </a>
            <Link to={`/download?volume=${index}`} className="downloadbutton" >
              <FileDownloadIcon className="downloadbutton" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
