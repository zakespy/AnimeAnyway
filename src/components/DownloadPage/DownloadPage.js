import DownloadIcon from '@mui/icons-material/Download';
import React, { useEffect, useState } from "react";
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

  const [pdfprogress, setpdfprogress] = useState(0);
  const [epubprogress, setepubprogress] = useState(0);

  const pdfDownload = () => {
    const pdf = document.getElementById("pdf-btn");
    const pdf_percent = document.getElementById("pdf_percent");
    pdf_percent.style.display = "inline-block"
    pdf.style.display = "none"
    const pdf_len = translatedVolume[volume_index].pdf_size * 1024;
    fetch(`/assets/file/${translatedVolume[volume_index].name}.pdf`).then(
      response => {
        var loaded = 0;
        return new Response(
          new ReadableStream({
            start(controller) {
              const reader = response.body.getReader();
              read();
              function read() {
                reader.read()
                  .then((progressEvent) => {
                    if (progressEvent.done) {
                      controller.close();
                      setpdfprogress(0)
                      return;
                    }
                    loaded += progressEvent.value.byteLength;
                    var percentage = (Math.round(loaded / pdf_len * 100));
                    setpdfprogress(percentage)
                    controller.enqueue(progressEvent.value);
                    read();
                  })
              }
            }
          })
        )
      }
    ).then(response => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = `${translatedVolume[volume_index].name}.pdf`;
        alink.click();
        pdf_percent.innerText = `Download Complete!`
        setTimeout(() => {
          pdf.style.display = "inline-block"
          pdf_percent.style.display = "none"
          pdf.style.backgroundColor = "rgba(255, 101, 101, 0.9)";
          pdf.style.color = "white";
          pdf.innerText = "Download pdf again?"
          pdf.style.border = "1px solid black";
        }, 3000);
      });
    });
  };

  const epubDownload = () => {
    const epub = document.getElementById("epub-btn");
    const epub_percent = document.getElementById("epub_percent");
    epub_percent.style.display = "inline-block"
    epub.style.display = ('none')
    const epub_len = translatedVolume[volume_index].epub_size * 1024;
    fetch(`/assets/file/${translatedVolume[volume_index].name}.epub`).then(
      response => {
        var loaded = 0;
        return new Response(
          new ReadableStream({
            start(controller) {
              const reader = response.body.getReader();
              read();
              function read() {
                reader.read()
                  .then((progressEvent) => {
                    if (progressEvent.done) {
                      controller.close();
                      setepubprogress(0)
                      return;
                    }
                    loaded += progressEvent.value.byteLength;
                    var percentage = (Math.round(loaded / epub_len * 100));
                    setepubprogress(percentage)
                    controller.enqueue(progressEvent.value);
                    read();
                  })
              }
            }
          })
        )
      }
    ).then(response => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = `${translatedVolume[volume_index].name}.epub`;
        alink.click();
        epub_percent.innerText = `Download Complete!`
        setTimeout(() => {
          epub_percent.style.display = "none"
          epub.style.display = "inline-block"
          epub.style.backgroundColor = "rgba(255, 101, 101, 0.9)";
          epub.style.color = "white";
          epub.innerText = "Download epub again?"
          epub.style.border = "1px solid black";
        }, 3000);
      });
    });
  };



  return (
    <>

      <div className="download-container">
        <h1>Download {translatedVolume[volume_index].name} of Classroom Of The Elite</h1>
        <button className="download-button" id="pdf-btn" onClick={pdfDownload}>
          Download as .pdf <DownloadIcon
            sx={{ color: "white", margin: "0 0 0 1rem" }}
            fontSize="large"
          />
        </button>
        <p id="pdf_percent">Downloading, {pdfprogress}%</p>

        <button className="download-button" id="epub-btn" onClick={epubDownload}>
          Download as .epub <DownloadIcon
            sx={{ color: "white", margin: "0 0 0 1rem" }}
            fontSize="large"
          />
        </button>
        <p id="epub_percent">Downloading, {epubprogress}%</p>
      </div>
    </>
  );
}