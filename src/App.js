// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import BuyMeCoffee from './components/BuyMeCoffee/BuyMeCoffee';

import Header from './components/ChannelHeader/Header.js';
import Content from './components/Content/Content.js';
import DownloadPage from './components/DownloadPage/DownloadPage.js';
import Footer from './components/Footer/Footer.js';
import ReadingPage from './components/ReadingPage/ReadingPage';
import VolumeCard from './components/VolumeCard/VolumeCard';
// import PdfViewerComponent from './components/PdfViewerComponent';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/download" element={<DownloadPage />} />
          <Route path="/read" element={<ReadingPage />} />
        </Routes>

        {/* <ReadingPage document={"Volume 0.pdf"}/> */}
       
        {/* <VolumeCard/> */}
        {/* <ReadingPage/> */}
        <BuyMeCoffee/>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
