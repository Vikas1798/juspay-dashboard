import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import './App.css'

const App = (props) => {
    return (
        <Router>
            <Routes {...props} />
        </Router>
    );
};
export default App;