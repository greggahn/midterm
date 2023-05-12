import React from "react";
import './App.css';
import Customer from "./components/Customer";
import { Dialog } from "@mui/material";
import {DialogActions} from "@mui/material";
import {DialogTitle} from "@mui/material";
import {DialogContent} from "@mui/material";
import {TextField} from "@mui/material";
import {Button} from "@mui/material";
import CustomerAdd from './components/CustomerAdd'
import Login from'./components/Login'
import Login2 from'./components/Login2'
import Legister from'./components/Legister'
import axios from 'axios';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';


class App extends React.Component{
    
    render() {

        return (
          <>
          <Router>
            <Routes>
              
              <Route path='/legister' element={<div style={{
                  justifyContent:"center"
              }}>
                <Legister></Legister></div>} />
              <Route path='/*' element={<Navigate to="/login"/>} />
            </Routes>
            <div>
              <div className="App">
                  <div className="logo">
                    <div>국밥</div>
                    <div>KooK-BoB</div>
                 </div>
              </div>
              <Routes>
                <Route path='/login' element={<div style={{
                  justifyContent:"left"}}><Login2></Login2></div>} />
                </Routes>
                <footer className="App">
                  <p>2023 Webclient Ahn Hyounjong 20202089</p>
                </footer>
            </div>
          </Router>
          </>
        )
    }
}

export default App;


