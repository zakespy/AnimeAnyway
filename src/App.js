// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './components/ChannelHeader/Header.js';
import Content from './components/Content/Content.js';
import DownloadPage from './components/DownloadPage/DownloadPage.js';
import Footer from './components/Footer/Footer.js';
import ReadingPage from './components/ReadingPage/ReadingPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        {/* <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/download" element={<DownloadPage />} />
        </Routes> */}

        <ReadingPage/>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
