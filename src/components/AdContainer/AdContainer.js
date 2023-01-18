import React from 'react'
import AdSense from 'react-adsense'; 
// import AdSense from 'react-adsense-ads';


export default function AdContainer() {
    return (

        <>

            <div>

                <AdSense.Google
                client='ca-pub-8762191555564843'
                slot='1641772231'
                style={{ display: 'block' }}
                layout='in-article'
                format='fluid'
            />

                {/* // auto full width responsive ads */}
                {/* <AdSense.Google
                client='ca-pub-9478553584665182' 
                slot='1641772231'
                style={{ display: 'block' }}
                format='auto'
                responsive='true'
                layoutKey='-gw-1+2a-9x+5c'
            /> */}

{/* 
                <AdSense.Google
                    client='ca-pub-8762191555564843'
                    slot='1641772231'
                    style={{ width: 500, height: 300, float: 'left' }}
                    format=''
                /> */}

                {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9478553584665182"
                crossOrigin="anonymous"></script>
            <ins className="adsbygoogle adcontainer"
                data-ad-client="ca-pub-9478553584665182"
                data-ad-slot="1641772231"
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>
            <script>
                (adsbygoogle = window.adsbygoogle || []).push({ });
            </script> */}
            </div>
        </>
    )
}


// export default class AdContainer extends React.Component {
//     componentDidMount() {
//         (window.adsbygoogle = window.adsbygoogle || []).push({});
//     }

//     render() {
//         return (
//             <ins className='adsbygoogle'
//                 style={{ display: 'block' }}
//                 data-ad-client='ca-pub-9478553584665182'
//                 data-ad-slot={this.props.slot}
//                 data-ad-format='auto'
//                 data-full-width-responsive="true"
//             >
//             </ins>
//         );
//     }
// }