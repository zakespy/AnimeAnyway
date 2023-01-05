import React,{useState,useRef} from "react";
import "../ReadingPage/ReadingPageStyle.css";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import volumedata from './files/Chapter 1 - Classroom of the Elite Volume O.pdf'
import sample from '../ReadingPage/files/sample.pdf'
import { EpubViewer, ReactEpubViewer } from "react-epub-viewer";



import {
  EpubView, // Underlaying epub-canvas (wrapper for epub.js iframe)
  EpubViewStyle, // Styles for EpubView, you can pass it to the instance as a style prop for customize it
  ReactReader, // A simple epub-reader with left/right button and chapter navigation
  ReactReaderStyle, // Styles for the epub-reader it you need to customize it
} from "react-reader";


export default function ReadingPage() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page
  const viewerRef = useRef(null);
    
  const docs = [
    // { uri: "https://url-to-my-pdf.pdf" },
    { uri: require("../../assets/file/Volume O.pdf") }, // Local File
  ];

  function onDocumentLoadSuccess({numPages}){
    setNumPages(numPages);
    setPageNumber(1)
  }

  return (
    <>
      <div className="reading-container">
        {/* <ReactEpubViewer
          url={"../../assets/file/Volume O.epub"}
          ref={viewerRef} 
        /> */}

        {/* <ReactReader
          url={"../../assets/file/Volume O.pdf"}
          title={"Alice in wonderland"}
          location={"epubcfi(/6/2[cover]!/6)"}
          locationChanged={(epubcifi) => console.log(epubcifi)}
        /> */}

        <Document file="./files/sample.pdf" onLoadSuccess={onDocumentLoadSuccess}>
          <Page height="500" pageNumber={pageNumber}/> 
        </Document>
        
      </div>
    </>
  );
}
