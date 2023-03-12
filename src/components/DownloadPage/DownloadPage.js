import DownloadIcon from '@mui/icons-material/Download';
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { translatedVolume } from "../../constants/volumeObj.js";

import './DownloadPage.css';

export default function Content() {
  useEffect(() => {
    window.scrollTo(0, 400);
  }, [])

  const search = useLocation().search;
  var volume_index = 0;
  volume_index = new URLSearchParams(search).get("volume");


  const pdfDownload = () => {
    // using Java Script method to get PDF file
    fetch(`/assets/file/${translatedVolume[volume_index].name}.pdf`).then(
      (response) => {
        response.blob().then((blob) => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement("a");
          // alink.href = translatedVolume[volume_index].driveURL;
          alink.href = fileURL;
          alink.download = `${translatedVolume[volume_index].name}.pdf`;
          alink.click();
        });
      }
    );
  };

  const epubDownload = () => {
    // using Java Script method to get PDF file
    fetch(`/assets/file/${translatedVolume[volume_index].name}.epub`).then(
      (response) => {
        response.blob().then((blob) => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement("a");
          alink.href = fileURL;
          alink.download = `${translatedVolume[volume_index].name}.epub`;
          alink.click();
        });
      }
    );
  };



  return (
    <>
      <div className="download-container">
        Download {translatedVolume[volume_index].name} of COTE
        {/* <a
            // href={path}
            href={`../../assets/file/${translatedVolume[volume_index].name}.pdf`}
            // target="_blank"
            rel="noreferrer"
            // attributes-list
            // download={translatedVolume[volume_index].name}
            download
          > */}
        <button className="download-button" onClick={pdfDownload}>
          Download as .pdf
          <DownloadIcon
            sx={{ color: "white", margin: "0 0 0 1rem" }}
            fontSize="large"
          />
        </button>
        {/* </a> */}
        {/* <a
            href={`../../assets/file/${translatedVolume[volume_index].name}.epub`}
            // target="_blank"
            // rel="noreferrer"
            download ={`../../assets/file/${translatedVolume[volume_index].name}.epub`}
          > */}
        {/* <Link to="" target="_blank" download> */}
        <button className="download-button" onClick={epubDownload}>
          Download as .epub
          <DownloadIcon
            sx={{ color: "white", margin: "0 0 0 1rem" }}
            fontSize="large"
          />
        </button>
        {/* </Link> */}
        {/* </a> */}
      </div>
    </>
  );
}