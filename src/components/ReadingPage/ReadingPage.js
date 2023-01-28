import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import "../ReadingPage/ReadingPageStyle.css";
import { translatedVolume } from "../../constants/volumeObj.js";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import NorthIcon from '@mui/icons-material/North';
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Iframe from "react-iframe";

import { Viewer, SpecialZoomLevel,ViewMode } from "@react-pdf-viewer/core";
import { Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import {
  pageNavigationPlugin,
  RenderCurrentPageLabelProps,
} from "@react-pdf-viewer/page-navigation";
import "@react-pdf-viewer/page-navigation/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import {
  fullScreenPlugin,
  RenderEnterFullScreenProps,
  FullScreenIcon
} from "@react-pdf-viewer/full-screen";
import "@react-pdf-viewer/full-screen/lib/styles/index.css";
import { themePlugin } from "@react-pdf-viewer/theme";
import { DarkIcon, LightIcon } from "@react-pdf-viewer/theme";
import { ThemeContext } from "@react-pdf-viewer/core";


export default function ReadingPage(props) {
  const location = useLocation(); 
  const search = useLocation().search;

   var zoomIndex = 1.8
   // eslint-disable-next-line no-restricted-globals
   const screenWidth = screen.availWidth
   const newWidth = (screenWidth*0.001875) - 0.125
   // eslint-disable-next-line no-restricted-globals 
   screenWidth >= 1024?console.log("width = 1024"):zoomIndex = newWidth
 

  var volume_index = 0;
  volume_index = new URLSearchParams(search).get("volume");

  const pageNavigationPluginInstance = pageNavigationPlugin();
  const { jumpToPage, CurrentPageInput, CurrentPageLabel } =
    pageNavigationPluginInstance;

  const fullScreenPluginInstance = fullScreenPlugin({
    // Zoom to fit the screen after entering and exiting the full screen mode
    onEnterFullScreen: (zoom) => {
        zoom(SpecialZoomLevel.zoom = zoomIndex);
    },
    onExitFullScreen: (zoom) => {
        zoom(SpecialZoomLevel.PageFit);
    },
},);
  const { EnterFullScreen ,EnterFullScreenMenuItem} = fullScreenPluginInstance;

  const themePluginInstance =  themePlugin(); 
  const {SwitchThemeButton} = themePluginInstance;

  const [pageNumber,setPageNumber] = useState(0);
  const [currentPageNo,setCurrentPageNo] = useState(pageNumber);  
  const [chapters,setChapters] = useState([])
  const [totalPage,setTotalPage] = useState()
  const [chapterName,setChapterName] = useState("")
  const [currentTheme, setCurrentTheme] = React.useState("light");
  const [togglebutton, setToggleButton] = React.useState(true);
  const themeContext = { currentTheme, setCurrentTheme };

  useEffect(()=>{
    setChapters(translatedVolume[volume_index].chapter);
    console.log(translatedVolume[volume_index].chapter[0]);
    setChapterName(translatedVolume[volume_index].chapter[0].name);
    setTotalPage(translatedVolume[volume_index].totalPage);
    setPageNumber(translatedVolume[volume_index].chapter[0].pageNo);
    window.scrollTo(0,0);
   
    // console.log(newWidth)
    // console.log(zoomIndex)
  },[])


  const path = location.state?.path;

  const switchButton =(bool)=>{
    setToggleButton(bool);
  }

 
  return (
    <>
      <div className="reading-container">
        <div className="label-tab">
          <div className="theme-btn">
            <ThemeContext.Provider value={themeContext} key={pageNumber}>
              <SwitchThemeButton />
            </ThemeContext.Provider>
          </div>


          <div
            className="fullscreeen-btn"
            onClick={() => {
              switchButton(true);
            }}
          >
            <EnterFullScreen>
              {(props) => (
                // onEnterFullScreen =>(zoom)=>{
                //   zoom(SpecialZoomLevel.PageWidth);
                // },
                <>
                
                <button
                  className="ful-btn"
                  // eslint-disable-next-line no-unused-expressions
                  onClick={props.onClick}
                >
                  <FullScreenIcon />
                  {/* Enter fullscreen */}
                </button>
                </>
              )}
            </EnterFullScreen>
          </div>

          <div
            className="pageInput"
            onClick={() => {
              switchButton(false);
            }}
          >
            <CurrentPageInput /> /{totalPage}
          </div>

          <div
            className="chapter-option"
            onClick={() => {
              switchButton(false);
            }}
          >
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
                          setPageNumber(e.pageNo);
                          setChapterName(e.name);
                          jumpToPage(e.pageNo);
                          // jumpToPage(pageNumber);
                          console.log(e.name + e.pageNo);
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
        </div>


        <div className="pdf-viewer-container">
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.2.146/build/pdf.worker.min.js">
            <Viewer
              fileUrl={path}
              className="viewer"
              width="100%"
              initialPage={pageNumber}
              scrollMode=""
              defaultScale={SpecialZoomLevel.PageFit}
              theme={currentTheme}

              plugins={
                (
                  [themePluginInstance],
                  [fullScreenPluginInstance,pageNavigationPluginInstance]
                  // [pageNavigationPluginInstance]
                )
              }

              ViewMode={ViewMode.SinglePage}
            />
          </Worker>
          <div className="scrollToTop" onClick={()=>{jumpToPage(0)}}>
            {/* <button className="scrollToTop-btn"onClick={()=>{jumpToPage(0)}}> */}
            <button className="scrollToTop-btn"onClick={()=>{window.scrollTo(0,0)}}>
            <NorthIcon/>
            </button>
          </div>
        </div>

        

      </div>
    </>
  );
}
