import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { translatedVolume, volumeData } from '../../constants/volumeObj.js';
// import AdContainer from "../AdContainer/AdContainer.js";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import VolumeCard from "../VolumeCard/VolumeCard.js";

import './ContentStyle.css';

export default function Content() {

  const [volumes, setvolumes] = useState(volumeData.slice(0).reverse());
  const [transVolumes, setTransVolumes] = useState(translatedVolume.slice(0).reverse());
  // console.log(volumes)
  // const [volumes, setvolumes] = useState({
  //     vol1: "",
  //     vol2: "",
  //     vol3: ""
  // })

  return (
    <>
      <div className="main-container">
        <div className="headerName">
          Anime Anyway Translations
        </div>
        <div className="volume-container">
          <div className="card-container">
            {transVolumes.map((e) => {
              return (
                <React.Fragment key={e.volumeNumber}>
                  <VolumeCard
                    card={{ e }}
                    index={translatedVolume.indexOf(e)}
                  />
                </React.Fragment>
              );
            })}
          </div>
          <div className="info-container">
            <strong>
              Year 2 Volume 9 Trial version is translated, full version will be out on 25th February and translated within a few weeks.
              <br /> <br />
              <a href="https://youtu.be/QuanaclRcy8" className="new-link" target="_blank">
                New Illustration for Year 2 Volume 9 Revealed. Click to watch
              </a>
              <br /> <br />
              <a href="https://youtu.be/ENcANeWv5GM" className="new-link" target="_blank">
                2nd Illustration for Year 2 Volume 9 Revealed. Click to watch
              </a>
              <br /> <br />
              <a href="https://www.youtube.com/watch?v=IrAEI9LuGKo" className="new-link" target="_blank">
                Year 2 Volume 9 Synopsis Revealed. Click to watch
              </a>
            </strong>
          </div>
        </div>
        <div className="accord-container">
          <Accordion className="accordion">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h1 className="previousVolume">Previous Volumes</h1>
            </AccordionSummary>
            <AccordionDetails>
              <div className="link-container">
                {volumes.map((vol) => {
                  return (
                    <React.Fragment key={vol.volumeNumber}>
                      <a
                        // href={vol.ytlink}
                        href="https://www.youtube.com/watch?v=CAkMA_DsT-I&list=PLgFd4QA43aqVIIrukJI6fqJNOv2g0k48N&index=2"
                        className="volume-url"
                        style={{
                          background: `${volumeData.indexOf(vol) % 2
                            ? "rgba(245, 245, 245, 0.8)"
                            : "rgba(255, 255, 255, 0.8)"
                            }`,
                        }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {vol.name}
                      </a>
                    </React.Fragment>
                  );
                })}
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <div></div>
    </>
  );
}