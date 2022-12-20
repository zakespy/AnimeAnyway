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
                        volumes.map( (vol) => {
                            return <h3>{vol}</h3>
                        } )
                    }                    
                </div>

                <div className="info-container">

                </div>

            </div>
        </>
    )
}