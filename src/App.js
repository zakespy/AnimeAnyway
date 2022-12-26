// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/ChannelHeader/Header.js';
import Footer from './components/Footer/Footer.js';
import Content from './components/Content/Content.js';
import DownloadPage from './components/DownloadPage/DownloadPage.js'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>

        <Routes>
          <Route path="/" element={ <Content /> } />
          <Route path="/download/:volNum" element={ <DownloadPage /> } />
        </Routes>

        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
