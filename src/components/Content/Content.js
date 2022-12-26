import React, { useState } from "react";
import { Link } from 'react-router-dom';

import { volumeData } from '../../constants/volumeObj.js'

import './ContentStyle.css'

export default function Content(){

    const [volumes, setvolumes] = useState( volumeData.slice(0).reverse() );
    console.log(volumes)
    // const [volumes, setvolumes] = useState({
    //     vol1: "",
    //     vol2: "",
    //     vol3: ""
    // })

    return (
        <>
            <div className="main-container">
                
                <div className="link-container">
                    {
                        volumes.map( (vol) => (
                            <Link to={`/download/${"Volume-"+vol.volumeNumber}`} state={{ url: vol.driveURL }} className="volume-url" style={{ background: `${volumeData.indexOf(vol) % 2 ? "rgba(245, 245, 245, 0.8)" : "rgba(255, 255, 255, 0.8)"}` }} key={vol.volumeNumber}>
                                Volume {vol.volumeNumber}
                                {/* <hr></hr> */}
                                {/* <a href="./" download={"../../cl2-header.png"}>download</a> */}
                            </Link>
                         ) )
                    }                    
                </div>

                <div className="info-container">

                </div>

            </div>
        </>
    )
}