import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Mail from "./Mail.js";
import EmailList from "./EmailList";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SendMail from "./SendMail";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        <div className="app__body">
          <Sidebar />
          <Routes>
            <Route exact path="/mail" element={<Mail />} />
            <Route exact path="/" element={<EmailList />} />
          </Routes>
        </div>

        <SendMail />
      </div>
    </Router>
  );
}

export default App;
