import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { volumeData } from '../../constants/volumeObj.js';
import './ContentStyle.css';

export default function Content() {

    const [volumes, setvolumes] = useState(volumeData.slice(0).reverse());
    // console.log(volumes)
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
                        volumes.map((vol) => (
                            <Link to={`/download/${vol.name}`} state={{ url: vol.driveURL }} className="volume-url" style={{ background: `${volumeData.indexOf(vol) % 2 ? "rgba(245, 245, 245, 0.8)" : "rgba(255, 255, 255, 0.8)"}` }} key={vol.volumeNumber}>
                                {vol.name}
                                {/* <hr></hr> */}
                                {/* <a href="./" download={"../../cl2-header.png"}>download</a> */}
                            </Link>
                        ))
                    }
                </div>

                <div className="info-container">
                    <strong>

                        Volume 0 will be translated by January 5th. <br /> <br />
                        Year 2 Volume 9 is estimated to release on february 25th, and trial version will be released early in february.
                        Consider subscribing to the channel for more updates!
                    </strong>
                </div>

            </div>
        </>
    )
}