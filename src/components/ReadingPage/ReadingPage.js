import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import "../ReadingPage/ReadingPageStyle.css";
import { translatedVolume } from "../../constants/volumeObj.js";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Iframe from "react-iframe";

import { Viewer } from "@react-pdf-viewer/core";
import { Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";


// import FileViewer from "react-file-viewer";

// import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
// import { EpubViewer, ReactEpubViewer } from "react-epub-viewer";
// import {
//   EpubView, // Underlaying epub-canvas (wrapper for epub.js iframe)
//   EpubViewStyle, // Styles for EpubView, you can pass it to the instance as a style prop for customize it
//   ReactReader, // A simple epub-reader with left/right button and chapter navigation
//   ReactReaderStyle, // Styles for the epub-reader it you need to customize it
// } from "react-reader";


export default function ReadingPage(props) {
  const search = useLocation().search;
  var volume_index = 0;
  volume_index = new URLSearchParams(search).get("volume");

  // const containerRef = useRef(null);

  
  // const [numPages, setNumPages] = useState(null);
  // const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page
  // const viewerRef = useRef(null);
    
  // const docs = [
  //   // { uri: "https://url-to-my-pdf.pdf" },
  //   { uri: require("../../../public/assets/file/Volume 0.pdf") }, // Local File
  // ];

  // function onDocumentLoadSuccess({numPages}){
  //   setNumPages(numPages);
  //   setPageNumber(1)
  // }

  // useEffect(()=>{
  //   const container = containerRef.current;
  //   let instance ,PSPDFKit;

  //   // eslint-disable-next-line no-unused-expressions
  //   (async function(){
  //     PSPDFKit = await import('pspdfkit');
  //     instance = await PSPDFKit.load({
  //       container,
  //       document:props.document,
  //       baseUrl:`${window.location.protocol}//${window.location.host}/${process.env.PUBLIC_URL}`
  //     });
  //   })();

  //   return () => PSPDFKit && PSPDFKit.unload(container)
  // },[]);

  const [pageNumber,setPageNumber] = useState(0);
  const [chapters,setChapters] = useState([])
  const [chapterName,setChapterName] = useState("")

  useEffect(()=>{
    setChapters(translatedVolume[volume_index].chapter);
    console.log(translatedVolume[volume_index].chapter[0]);
    setChapterName(translatedVolume[volume_index].chapter[0].name);
    setPageNumber(translatedVolume[volume_index].chapter[0].pageNo);
  },[])

  const path = `public\assets\file\Year Two Volume 8.pdf`;
  // var html = require('../../assets/file/Chapter-1-Classroom-of-the-Elite-Volume-O.html') 

  function changeChapter(){

  }

  return (
    <>
      <div className="reading-container">
        {/* <ReactEpubViewer
          url={path}
          ref={viewerRef} 
        /> */}
        {/* <ReactReader
          url={path}
          title={"Alice in wonderland"}
          location={"epubcfi(/6/2[cover]!/6)"}
          locationChanged={(epubcifi) => console.log(epubcifi)}
        /> */}
        {/* <Document file={path} onLoadSuccess={onDocumentLoadSuccess}>
          <Page height="500" pageNumber={pageNumber}/> 
        </Document> */}

        {/* <FileViewer
          fileType={"pdf"}
          filePath={path}
        /> */}
        <div className="chapter-option">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{chapterName}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {chapters.map((e) => {
                return (
                  <>
                    <div
                      className="chapter-container"
                      onClick={() => {
                        setChapterName(e.name);
                        setPageNumber(e.pageNo);
                        console.log(e.name + e.pageNo)
                      }}
                    >
                      {e.name}
                    </div>
                  </>
                );
              })}
            </AccordionDetails>
          </Accordion>
        </div>

        <div className="pdf-viewer" style={{ height: "90%", width: "100%" }}>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.2.146/build/pdf.worker.min.js">
            <Viewer
              fileUrl={path}
              style={{ height: "100px" }}
              width="100%"
              initialPage={pageNumber}
              scrollMode=""
              // renderPage={pageNumber}
            />
          </Worker>
        </div>

        {/***************************************  Working *************************************************/}
        {/* <Iframe
          url={path}
          // width="640px"
          // height="320px"
          id=""
          className="pdf-display"
          display="block"
          position="relative"
          
        /> */}
        {/* <div ref={containerRef} style={{width:"100%",height:"100vh"}}>
        </div> */}
        {console.log(path)}
        {/* <object
          data={path}
          width="800"
          height="500"
          className="pdf-display"
        ></object> */}
        {/* <embed src={path}
               width="100%"
               height="1000"
               ReadingPage="10"
               ></embed> */}
      </div>
    </>
  );
}
