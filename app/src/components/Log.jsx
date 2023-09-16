import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import "../style/log.css"
function Log() {
    let [inpp, setinpp] = useState("")
    let [inp, setinp] = useState("")
    function iss() {
        let is1 = localStorage.getItem("ssm")
        let is2 = localStorage.getItem("ssm2")
        if (JSON.parse(is1) === inpp && inp === JSON.parse(is2)) {
            alert("hello")
        } else {
            alert("erro")
        }
    }

    return (
        <div className="log">
            <form>
                <input type="text" placeholder="User_Name" onChange={(e) => setinpp(e.target.value)} />
                <input type="password" placeholder="Password" onChange={(e) => setinp(e.target.value)} />
                <button onClick={iss}>
                    submite
                </button>
                <button >
                    <Link to="/in">
                        sing in
                    </Link>
                </button>
            </form>
        </div>
    )
}
export default Log;