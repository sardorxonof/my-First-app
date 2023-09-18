import React , {useState} from "react";
import { Link } from 'react-router-dom'
import "../style/log.css"
function In() {
    let [inpp, setInpp] = useState("")
    let [inp, setInp] = useState("")
    let [inp2, setInp2] = useState("")
    function iss(e) {
        e.preventDefault()
        let ss = JSON.stringify(inpp)
        localStorage.setItem("ssm", ss)
        
        if ( inp === inp2 ) {
            let sss = JSON.stringify(inp)
            localStorage.setItem("ssm2", sss)
        } else {
            alert("erors password")
        }   
    }
    function notRotate(e) {
        e.preventDefault()
    }
        return (
                <div className="log">
                <form>
                    <input type="text" placeholder="User_Name"  onChange={(e) => setInpp(e.target.value)}/>
                    <input type="password" placeholder="Password" onChange={(e) => setInp(e.target.value)}/>
                    <input type="password" placeholder="Password" onChange={(e) => setInp2(e.target.value)}/>
                    <hr/>
                    <button type="button" onClick={iss}>
                        submite
                    </button>
                    <button onClick={notRotate}>
                        <Link to="/log">
                            sing up
                        </Link>
                    </button>
                </form>
            </div>
        )
    }
    export default In;