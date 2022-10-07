import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import App from "./App";
import Testshii from "./component/Testshii"
import MintPage from "./component/MintPage"
import LoginPage from "./component/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MintNftPage from "./component/MintNftPage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

      {/*<Testshii/>*/}

      {/*<App/>*/}
      <Router>
          <Routes>
              <Route path="/login" element={<LoginPage/>}/>
              <Route path="/mint-page" element={<MintPage/>}/>
              <Route path="/mintPage" element={<MintNftPage/>}/>
              <Route path="/test" element={<Testshii/>}/>
          </Routes>
      </Router>
  </React.StrictMode>
);

reportWebVitals();
