import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyNav from './components/MyNav';
import Alerts from './components/Alerts';
import TextForm from './components/TextForm';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.scss';
import './styles/mediaquery.scss';

const App = () => {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleDark = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.background = '#393646'
      showAlert("Darkmode is on", "secondary")
      document.title = 'TypeMaster-Darkmode'
    }
    else {
      setMode('light')
      document.body.style.background = '#F4EEE0'
      showAlert("Lightmode is on", "secondary")
      document.title = 'TypeMaster'
    }
  }

  return (
    <>

      <Router>
        <MyNav title="TypeMaster" contact="Contact" mode={mode} toggleDark={toggleDark} />
        <Alerts alert={alert} />
        <Routes>

          <Route path='*' element={<div className="my-4">Page not found 404</div>} />
          <Route path='/' element={<TextForm showAlert={showAlert} heading="Enter the Text to analyze" mode={mode} />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />

        </Routes>
        <Footer />
      </Router>

    </>
  )
}

export default App
