import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import './Styles/App.css';
import particlesOptions from "./particles.json";

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './JS/Components/Header';
import PortfolioContainer from './JS/Components/PortfolioContainer';

function App() {

    return (
        <div className="App">
            <ToastContainer />
            <PortfolioContainer />
        </div>
    );
}

export default App;
