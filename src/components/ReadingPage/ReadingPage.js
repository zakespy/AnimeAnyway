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

import { Viewer, SpecialZoomLevel,ViewMode } from "@react-pdf-viewer/core";
import { Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { pageNavigationPlugin } from "@react-pdf-viewer/page-navigation";
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
  var volume_index = 0;
  volume_index = new URLSearchParams(search).get("volume");

  const pageNavigationPluginInstance = pageNavigationPlugin();
  const { jumpToPage, CurrentPageInput } = pageNavigationPluginInstance;

  const fullScreenPluginInstance = fullScreenPlugin();
  const { EnterFullScreen } = fullScreenPluginInstance;

  const themePluginInstance = themePlugin();
  const {SwitchThemeButton} = themePluginInstance;

  // const defaultLayoutPluginInstance = defaultLayoutPlugin({
  //   toolbarPlugin: {
  //     fullScreenPlugin: {
  //       // Zoom to fit the screen after entering and exiting the full screen mode
  //       onEnterFullScreen: (zoom) => {
  //         zoom(SpecialZoomLevel.PageFit);
  //       },
  //       onExitFullScreen: (zoom) => {
  //         zoom(SpecialZoomLevel.PageFit);
  //       },
  //     },
  //   },
  // });


  const [pageNumber,setPageNumber] = useState(0);
  const [chapters,setChapters] = useState([])
  const [totalPage,setTotalPage] = useState()
  const [chapterName,setChapterName] = useState("")
  const [currentTheme, setCurrentTheme] = React.useState("light");
  const themeContext = { currentTheme, setCurrentTheme };

  useEffect(()=>{
    setChapters(translatedVolume[volume_index].chapter);
    console.log(translatedVolume[volume_index].chapter[0]);
    setChapterName(translatedVolume[volume_index].chapter[0].name);
    setTotalPage(translatedVolume[volume_index].totalPage);
    setPageNumber(translatedVolume[volume_index].chapter[0].pageNo);
  },[])

  const path = location.state?.path;
 
  return (
    <>
      <div className="reading-container">
        <div className="label-tab">
          <div className="theme-btn">
            <ThemeContext.Provider value={themeContext}>
              <SwitchThemeButton />
            </ThemeContext.Provider>
          </div>

          <div className="fullscreeen-btn">
            <EnterFullScreen>
              {(props) => (
                <button className="ful-btn"
                  
                  onClick={props.onClick}
                >
                  <FullScreenIcon/>
                  {/* Enter fullscreen */}
                </button>
              )}
            </EnterFullScreen>
          </div>

          <div className="pageInput">
            <CurrentPageInput jumpToPage={pageNumber} /> /{totalPage}
          </div>

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
                          jumpToPage(pageNumber);
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
                  [pageNavigationPluginInstance],
                [fullScreenPluginInstance])
              }
              ViewMode={ViewMode.SinglePage}
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
        {/* {console.log(path)} */}
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
