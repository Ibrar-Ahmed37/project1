import './App.css';
import React from 'react'
import Login from './pages/Login.js';
import {BrowserRouter as Router,Routes,Switch,Route,Link} from "react-router-dom";
import Cars from './pages/Cars.js';
import DeCars from './pages/DeCars.js';
import Home from './pages/Home.js';
import Navbar from './pages/Navbar';
import i18n from "i18next";

import { useTranslation, initReactI18next } from "react-i18next";

function App() {
  const [currentLanguage, setCurrentLanguage] = React.useState('en')
  const [isAuthenticated,setisAuthenticated]=React.useState(true)
  const translationsEn = {
    welcome: "Welcome ghgh!",
  };
  const translationsDe = {
      welcome: "Welcome German!",
  };
      
  React.useEffect(() => {
      i18n
      .use(initReactI18next) // passes i18n down to react-i18next
      .init({
          resources: {
          en: { translation: translationsEn },
          de: { translation: translationsDe }
          },
          lng: "en",
          fallbackLng: "en",
          interpolation: { escapeValue: false },
      });
      selectLang('de')
  }, [])

  React.useEffect(() => {
    i18n.changeLanguage(currentLanguage)
  }, [currentLanguage])

  const selectLang = (ln) => {
    setCurrentLanguage(ln)
  }
  const checkLog=(val)=>
  {
    if(!isAuthenticated)
        setisAuthenticated(val)
  }
  return (
    <Router>
        <div className="App">
            <Navbar selectLanguage={selectLang} 
            />
            <Routes>
              { isAuthenticated ?  <Route path="/cars"  element={<Cars checkLogin={checkLog}/>}  />    :null}
                <Route path="/" element={<Home/>}/>
                <Route path="/login" exact element={<Login/>} />
                              
            </Routes>
        </div>
    </Router>
  );
}

export default App;
