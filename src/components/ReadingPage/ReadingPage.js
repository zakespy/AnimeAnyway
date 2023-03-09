import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NorthIcon from '@mui/icons-material/North';
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { SpecialZoomLevel, ThemeContext, Viewer, ViewMode, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import {
  fullScreenPlugin
} from "@react-pdf-viewer/full-screen";
import "@react-pdf-viewer/full-screen/lib/styles/index.css";
import {
  pageNavigationPlugin
} from "@react-pdf-viewer/page-navigation";
import "@react-pdf-viewer/page-navigation/lib/styles/index.css";
import { themePlugin } from "@react-pdf-viewer/theme";
import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { translatedVolume } from "../../constants/volumeObj.js";
import "../ReadingPage/ReadingPageStyle.css";
import "./DarkMode.css";
import { ReactComponent as Moon } from "./Moon.svg";
import { ReactComponent as Sun } from "./Sun.svg";


export default function ReadingPage(props) {
  const location = useLocation();
  const search = useLocation().search;

  var zoomIndex = 1.8
  // eslint-disable-next-line no-restricted-globals
  const screenWidth = screen.availWidth
  const newWidth = (screenWidth * 0.001875) - 0.125
  // eslint-disable-next-line no-restricted-globals 
  screenWidth >= 1024 ? console.log("width = 1024") : zoomIndex = newWidth

  var volume_index = 0, theme = "light";
  volume_index = new URLSearchParams(search).get("volume");
  theme = new URLSearchParams(search).get("theme");

  const pageNavigationPluginInstance = pageNavigationPlugin();
  const { jumpToPage, CurrentPageInput } =
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
  const { EnterFullScreen } = fullScreenPluginInstance;

  const themePluginInstance = themePlugin();
  const { SwitchThemeButton } = themePluginInstance;

  const [pageNumber, setPageNumber] = useState(0);
  // const [currentPageNo, setCurrentPageNo] = useState(pageNumber);
  const [chapters, setChapters] = useState([])
  const [totalPage, setTotalPage] = useState()
  const [chapterName, setChapterName] = useState("")
  const [currentTheme, setCurrentTheme] = React.useState(theme);
  const [togglebutton, setToggleButton] = React.useState(true);
  const [pdfButton, setPdfButton] = React.useState(theme);
  const themeContext = { currentTheme, setCurrentTheme };

  useEffect(() => {
    setChapters(translatedVolume[volume_index].chapter);
    // console.log(translatedVolume[volume_index].chapter[0]);
    setChapterName(translatedVolume[volume_index].chapter[0].name);
    setTotalPage(translatedVolume[volume_index].totalPage);
    setPageNumber(translatedVolume[volume_index].chapter[0].pageNo);
    window.scrollTo(0, 0);
    // console.log(newWidth)
    // console.log(zoomIndex)
  }, [])


  const darkPath = translatedVolume[volume_index].darkPath;
  const lightPath = translatedVolume[volume_index].path;

  let path
  pdfButton == "light" ? path = lightPath : path = darkPath

  const switchButton = (bool) => {
    setToggleButton(bool);
  }
  useEffect(() => {
    if (pdfButton == "dark") {
      document.getElementById('darkmode-toggle').checked = true;
    } else {
      document.getElementById('darkmode-toggle').checked = false;
    }
    // set el height and width etc.
  }, [pdfButton])
  const changePDF = () => {
    if (pdfButton == "light") { setPdfButton("dark") }
    else { setPdfButton("light") }
    // pdfButton?path=lightPath:path=darkPath
  }

  return (
    <>
      <div className="reading-container">
        <div className="label-tab">
          <div className='dark_mode_2'>
            <input
              className='dark_mode_input'
              type='checkbox'
              id='darkmode-toggle'
            />
            <label className='dark_mode_label' for='darkmode-toggle'>
              <Sun />
              <Moon />
            </label>
          </div>
          <div className="theme-btn" onClick={() => {
            changePDF()
          }}>

            <ThemeContext.Provider value={themeContext}>
              <div className="switchthemebtn">
                <div className="bt1">

                  <SwitchThemeButton />
                </div>
                <div className="bt2">

                  <SwitchThemeButton />
                </div>

              </div>

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
                    <img src="https://img.icons8.com/windows/32/null/fit-to-width--v1.png" />
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
                    <React.Fragment key={e.pageNo}>
                      <div
                        className="chapter-container"
                        onClick={() => {
                          setPageNumber(e.pageNo);
                          setChapterName(e.name);
                          jumpToPage(e.pageNo);
                          // jumpToPage(pageNumber);
                          // console.log(e.name + e.pageNo);
                        }}
                      >
                        {e.name}
                      </div>
                    </React.Fragment>
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
                  [fullScreenPluginInstance, pageNavigationPluginInstance]
                  // [pageNavigationPluginInstance]
                )
              }

              ViewMode={ViewMode.SinglePage}
            />
          </Worker>
          <div className="scrollToTop" onClick={() => { jumpToPage(0) }}>
            {/* <button className="scrollToTop-btn"onClick={()=>{jumpToPage(0)}}> */}
            <button className="scrollToTop-btn" onClick={() => { window.scrollTo(0, 0) }}>
              <NorthIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
