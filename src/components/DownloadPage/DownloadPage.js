import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";

import { Button } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';

import './DownloadPage.css'

export default function Content(){

    const location = useLocation();
    const url = location.state?.url;
    const { volNum } = useParams();
    console.log(url)

    return (
        <>
            <div className="download-container">
                Download { volNum } of COTE
                <a href={url} target="_blank" >
                    <button className="download-button">
                        Download
                        <DownloadIcon sx={{ color: "black", margin: "0 0 0 1rem" }} fontSize="large" />
                    </button>
                </a>
            </div>
        </>
    )
}