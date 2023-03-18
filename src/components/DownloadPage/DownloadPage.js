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
    fetch(`/assets/file/${translatedVolume[volume_index].name}.pdf`).then(
      (response) => {
        const contentLength = response.headers.get('content-length');
        let loaded = 0;
        return new Response(
          new ReadableStream({
            start(controller) {
              const reader = response.body.getReader();
              read();
              function read() {
                reader.read()
                  .then((progressEvent) => {
                    console.log(contentLength)
                    if (progressEvent.done) {
                      controller.close();
                      return;
                    }
                    loaded += progressEvent.value.byteLength;
                    console.log(Math.round(loaded / contentLength * 100) + '%');
                    controller.enqueue(progressEvent.value);
                    read();
                  })
              }
            }
          }
          ))
        //    response.blob().then((blob) => {
        //   const fileURL = window.URL.createObjectURL(blob);
        //   let alink = document.createElement("a");
        //   alink.href = fileURL;
        //   alink.download = `${translatedVolume[volume_index].name}.pdf`;
        //   alink.click();
        // });
      }
    );
  };

  const epubDownload = () => {
    const epub = document.getElementById("epub-btn");
    epub.onClick = () => { return }
    epub.style.backgroundColor = "rgba(255, 238, 238, 0.9)";
    epub.style.color = "black";
    epub.style.border = "none";
    epub.innerText = "Downloading..."
    fetch(`/assets/file/${translatedVolume[volume_index].name}.epub`).then(
      (response) => {
        response.blob().then((blob) => {
          const fileURL = window.URL.createObjectURL(blob);
          let alink = document.createElement("a");
          alink.href = fileURL;
          alink.download = `${translatedVolume[volume_index].name}.epub`;
          alink.click();
          epub.innerText = `Download Complete!`
          setTimeout(() => {
            epub.style.backgroundColor = "rgba(255, 101, 101, 0.9)";
            epub.style.color = "white";
            epub.innerText = "Download again?"
            epub.style.border = "1px solid black";
          }, 2000);
        });
      }
    );
  };



  return (
    <>
      <div className="download-container">
        <h1>Download {translatedVolume[volume_index].name} of Classroom Of The Elite</h1>
        <button className="download-button" onClick={pdfDownload}>
          Download as .pdf
          <DownloadIcon
            sx={{ color: "white", margin: "0 0 0 1rem" }}
            fontSize="large"
          />
        </button>
        <button className="download-button" id="epub-btn" onClick={epubDownload}>
          Download as .epub
          <DownloadIcon
            sx={{ color: "white", margin: "0 0 0 1rem" }}
            fontSize="large"
          />
        </button>
      </div>
    </>
  );
}