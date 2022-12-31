import React from "react";
import { useLocation, useParams } from "react-router-dom";

import DownloadIcon from '@mui/icons-material/Download';
import { Button } from "@mui/material";

import './DownloadPage.css';

export default function Content() {

    const location = useLocation();
    const url = location.state?.url;
    const { volNum } = useParams();
    // console.log(url)

    return (
        <>
            <div className="download-container">
                Download {volNum} of COTE
                <a href={url} target="_blank" rel="noreferrer" >
                    <button className="download-button">
                        Download
                        <DownloadIcon sx={{ color: "white", margin: "0 0 0 1rem" }} fontSize="large" />
                    </button>
                </a>
            </div>
        </>
    )
}