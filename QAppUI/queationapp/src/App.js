import React from 'react';
import './App.css';
import ReactQ from './Compo/ReactQ';
import Navbar from './Compo/Navbar';
import JsQ from './Compo/JsQ';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DotnetQ from './Compo/DotnetQ';
import AdoQ from './Compo/AdoQ';
import AspQ from './Compo/AspQ';
import MvcQ from './Compo/MvcQ';
import ApiQ from './Compo/ApiQ';
import Home from './Compo/Home';
import CsQ from './Compo/CsQ';
import SqlQ from './Compo/SqlQ';
import JavaQ from './Compo/JavaQ';
import ManualQ from './Compo/ManualQ';
import LogicQ from './Compo/LogicQ';
import AngularQ from './Compo/Angular';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/ReactQ" element={<ReactQ />} />

        <Route path="/JsQ" element={<JsQ/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/DotnetQ" element={<DotnetQ/>} />
        <Route path="/AdoQ" element={<AdoQ/>} />
        <Route path="/AspQ" element={<AspQ/>} />
        <Route path="/MvcQ" element={<MvcQ/>} />
        <Route path="/ApiQ" element={<ApiQ/>} />
        <Route path="/CsQ" element={<CsQ/>} />
        <Route path="/SqlQ" element={<SqlQ/>} />
        <Route path="/JavaQ" element={<JavaQ/>} />
        <Route path="/ManualQ" element={<ManualQ/>} />
        <Route path="/LogicQ" element={<LogicQ/>} />
        <Route path="/AngularQ" element={<AngularQ/>} />
      </Routes>
    </Router>
  );
}

export default App;
