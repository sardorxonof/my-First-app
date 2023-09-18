import React, { useState } from "react";
import { Link } from 'react-router-dom'
import "../style/log.css"
function Log() {
    let [inpp, setInpp] = useState("")
    let [inp, setInp] = useState("")
    function iss(e) {
        e.preventDefault()
        let is1 = localStorage.getItem("ssm")
        let is2 = localStorage.getItem("ssm2")
        if (JSON.parse(is1) === inpp && inp === JSON.parse(is2)) {
            alert("hello")
        } else {
            alert("erro")
        }
    }
    function notRotate(e) {
        e.preventDefault()
    }
    return (
        <div className="log">
            <form>
                <input type="text" placeholder="User_Name" onChange={(e) => setInpp(e.target.value)} />
                <input type="password" placeholder="Password" onChange={(e) => setInp(e.target.value)} />
                <button onClick={iss}>
                    submite
                </button>
                <button onClick={notRotate} >
                    <Link to="/in">
                        sing in
                    </Link>
                </button>
            </form>
        </div>
    )
}
export default Log;