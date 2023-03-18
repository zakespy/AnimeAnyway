import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import React from "react";
import { translatedVolume, volumeData } from '../../constants/volumeObj.js';
import VolumeCard from "../VolumeCard/VolumeCard.js";
import './ContentStyle.css';

export default function Content() {
  const volumes = volumeData.slice(0).reverse();
  const transVolumes = translatedVolume.slice(0).reverse();

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
              Year 2 Volume 9 is is translated completely.
              <br /><br />
              Year 2 Volume 9.5 will be out in June, and translation will take few weeks.
              <br /><br />
              Subscribe to the youtube channel to stay updated to the latest Classroom of the Elite news.
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
              <h2 className="previousVolume">Previous Classroom of the Elite Volumes</h2>
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
      <div>
      </div>
    </>
  );
}