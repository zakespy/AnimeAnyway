import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { volumeData } from '../../constants/volumeObj.js';
// import AdContainer from "../AdContainer/AdContainer.js";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import './ContentStyle.css';

export default function Content() {

    const [volumes, setvolumes] = useState(volumeData.slice(0).reverse());
    // console.log(volumes)
    // const [volumes, setvolumes] = useState({
    //     vol1: "",
    //     vol2: "",
    //     vol3: ""
    // })

    return (
      <>
        <div className="main-container">
          <div className="accord-container">
            <Accordion className="accordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <h1 className="previousVolume">Previous Volume</h1>
              </AccordionSummary>
              <AccordionDetails>
                <div className="link-container">
                  {volumes.map((vol) => {
                    // <Link
                    //   // to={`/download?volume=${volumeData.indexOf(vol)}`}
                    //   className="volume-url"
                    //   style={{
                    //     background: `${
                    //       volumeData.indexOf(vol) % 2
                    //         ? "rgba(245, 245, 245, 0.8)"
                    //         : "rgba(255, 255, 255, 0.8)"
                    //     }`,
                    //   }}
                    //   key={vol.volumeNumber}
                    // >
                    //   {vol.name}
                    //   {/* <hr></hr> */}
                      
                    // </Link>
                    return (
                      <>
                      {console.log(vol)}
                        <a
                          href={vol.ytlink}
                          className="volume-url"
                          style={{
                            background: `${
                              volumeData.indexOf(vol) % 2
                                ? "rgba(245, 245, 245, 0.8)"
                                : "rgba(255, 255, 255, 0.8)"
                            }`,
                          }}
                          target="_blank"
                          key={vol.volumeNumber} rel="noreferrer"
                        >
                          {vol.name}
                        </a>
                      </>
                    );
                    // eslint-disable-next-line react/jsx-no-target-blank
                    
                    })}
                </div>
              </AccordionDetails>
            </Accordion>
          </div>

          <div className="info-container">
            <strong>
              Volume 0 will be translated by January 5th. <br /> <br />
              Year 2 Volume 9 is estimated to release on february 25th, and
              trial version will be released early in february. Consider
              subscribing to the channel for more updates!
            </strong>
          </div>
        </div>
        <div></div>
      </>
    );
}