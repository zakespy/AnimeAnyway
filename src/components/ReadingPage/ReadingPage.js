import React,{useState} from "react";
import "../ReadingPage/ReadingPageStyle.css";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import volumedata from './files/Chapter 1 - Classroom of the Elite Volume O.pdf'
import sample from '../ReadingPage/files/sample.pdf'

export default function ReadingPage() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page

    


  return (
    <>
      <div className="reading-container">
        <Document file={{
            data:sample
        }}>
          <Page pageNumber={1} />
        </Document>
      </div>
    </>
  );
}
