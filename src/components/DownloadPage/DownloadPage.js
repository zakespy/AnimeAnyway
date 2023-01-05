import DownloadIcon from '@mui/icons-material/Download';
import React from "react";
import { useLocation } from "react-router-dom";
import { translatedVolume } from "../../constants/volumeObj.js";

import './DownloadPage.css';

export default function Content() {

    const search = useLocation().search;
    var volume_index = 0;
    volume_index = new URLSearchParams(search).get("volume");
    const path = '../../assets/file/Volume O.pdf';
    return (
      <>
        <div className="download-container">
          Download {translatedVolume[volume_index].name} of COTE
          <a
            // href={path}
            href={`../../assets/file/${translatedVolume[volume_index].name}.pdf`}
            // target="_blank"
            rel="noreferrer"
            // attributes-list
            // download={translatedVolume[volume_index].name}
            download
          >
            <button className="download-button">
              Download as .pdf
              <DownloadIcon
                sx={{ color: "white", margin: "0 0 0 1rem" }}
                fontSize="large"
              />
            </button>
          </a>
          <a
            href={`../../assets/file/${translatedVolume[volume_index].name}.epub`}
            // target="_blank"
            // rel="noreferrer"
            download
          >
            <button className="download-button">
              Download as .epub
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