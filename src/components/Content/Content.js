import React, { useState } from "react";

// import { google } from 'googleapis';

import './ContentStyle.css'

export default function Content(){

    const [volumes, setvolumes] = useState([
        'url1', 'url2', 'url3', 'url4', 'url5', 'url6', 'url7', 'url8', 'url9', 'url10'
    ])


    // const CLIENT_ID = '441068867296-es4i6dn4ekonddtf96p103p5qa2te0nc.apps.googleusercontent.com';
    // const CLIENT_SECRET = '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';
    // const REDIRECT_URI = 'https://developers.google.com/oauthplayground';

    // const REFRESH_TOKEN = '1//04Px1uUUdduRTCgYIARAAGAQSNwF-L9Ir_MUcS22AyfqAtVdEHyr-nsLsgvQDgG3bw1Bb0FlieuvM6cHFedqg454PTv8HOrsvOZE';


    // const oauth2Client = new google.auth.OAuth2(
    //     CLIENT_ID,
    //     CLIENT_SECRET,
    //     REDIRECT_URI
    // );
    
    // oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
    
    // const drive = google.drive({
    //     version: 'v3',
    //     auth: oauth2Client,
    // });


    // async function generatePublicUrl() {
    //     try {
    //     const fileId = '14rWHUpzLwoSmNsa0QN99ypQuWom9pdfH';
    //     await drive.permissions.create({
    //         fileId: fileId,
    //         requestBody: {
    //         role: 'reader',
    //         type: 'anyone',
    //         },
    //     });
    
    //     /* 
    //     webViewLink: View the file in browser
    //     webContentLink: Direct download link 
    //     */
    //     const result = await drive.files.get({
    //         fileId: fileId,
    //         fields: 'webViewLink, webContentLink',
    //     });
    //     console.log(result.data);
    //     } catch (error) {
    //     console.log(error.message);
    //     }
    // }


    // useEffect(() => {
    //     generatePublicUrl();
    // }, [])


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