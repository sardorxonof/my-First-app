import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from "./Home";
import About from "./About";
import Carders from "./Carders";
import Log from "./Log";
import In from "./In.jsx";
import "../style/main.css"
function Nav() {
    return (
        <div className="main">
            <BrowserRouter>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="About">About</Link>
                    <Link to="/card">Card</Link>
                    <Link to="/in"> log in</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/card" element={<Carders />} />
                    <Route path="/log" element={<Log />} />
                    <Route path="/in" element={< In/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Nav;