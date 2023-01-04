import DownloadIcon from '@mui/icons-material/Download';
import React from "react";
import { useLocation } from "react-router-dom";
import { translatedVolume } from "../../constants/volumeObj.js";

import './DownloadPage.css';

export default function Content() {

    const search = useLocation().search;
    var volume_index = 0;
    volume_index = new URLSearchParams(search).get("volume");

    return (
      <>
        <div className="download-container">
          Download {translatedVolume[volume_index].name} of COTE
          <a
            href={translatedVolume[volume_index].driveURL}
            target="_blank"
            rel="noreferrer"
          >
            <button className="download-button">
              Download
              <DownloadIcon
                sx={{ color: "white", margin: "0 0 0 1rem" }}
                fontSize="large"
              />
            </button>
          </a>
        </div>
      </>
    );
}