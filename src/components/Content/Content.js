import React, { useState } from "react";
import './ContentStyle.css'

export default function Content(){

    const [volumes, setvolumes] = useState([
        'url1', 'url2', 'url3', 'url4', 'url5', 'url6', 'url7', 'url8', 'url9', 'url10'
    ])

    return (
        <>
            <div className="main-container">
                
                <div className="link-container">
                    {
                        volumes.map( (vol) => (
                            <div className="volume-url" style={{ background: `${volumes.indexOf(vol) % 2 ? "rgba(245, 245, 245, 0.8)" : "rgba(255, 255, 255, 0.8)"}` }} >
                                {vol}
                                {/* <hr></hr> */}
                            </div>
                         ) )
                    }                    
                </div>

                <div className="info-container">

                </div>

            </div>
        </>
    )
}