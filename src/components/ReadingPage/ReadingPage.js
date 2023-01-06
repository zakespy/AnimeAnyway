import React,{useState,useRef} from "react";
import { useLocation } from "react-router-dom";
import "../ReadingPage/ReadingPageStyle.css";
import { translatedVolume } from "../../constants/volumeObj.js";
import Iframe from "react-iframe";
// import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
// import { EpubViewer, ReactEpubViewer } from "react-epub-viewer";
// import {
//   EpubView, // Underlaying epub-canvas (wrapper for epub.js iframe)
//   EpubViewStyle, // Styles for EpubView, you can pass it to the instance as a style prop for customize it
//   ReactReader, // A simple epub-reader with left/right button and chapter navigation
//   ReactReaderStyle, // Styles for the epub-reader it you need to customize it
// } from "react-reader";


export default function ReadingPage() {
  const search = useLocation().search;
  var volume_index = 0;
  volume_index = new URLSearchParams(search).get("volume");
  // const [numPages, setNumPages] = useState(null);
  // const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page
  // const viewerRef = useRef(null);
    
  // const docs = [
  //   // { uri: "https://url-to-my-pdf.pdf" },
  //   { uri: require("../../assets/file/Volume O.pdf") }, // Local File
  // ];

  // function onDocumentLoadSuccess({numPages}){
  //   setNumPages(numPages);
  //   setPageNumber(1)
  // }

  const path = require(`../../assets/file/${translatedVolume[volume_index].name}.pdf`);

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


        {/***************************************  Working *************************************************/}

        <Iframe
          url={path}
          // width="640px"
          // height="320px"
          id=""
          className="pdf-display"
          display="block"
          position="relative"
          
        />
        
        {console.log(path)}
        {/* <object
          data={path}
          width="800"
          height="500"
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
