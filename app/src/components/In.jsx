import React , {useState} from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
function In() {
    let [inpp, setinpp] = useState("")
    let [inp, setinp] = useState("")
    let [inp2, setinp2] = useState("")

    function iss() {
        let ss = JSON.stringify(inpp)
        localStorage.setItem("ssm", ss)
        
        if ( inp=== inp2 ) {
            let sss = JSON.stringify(inp)
            localStorage.setItem("ssm2", sss)
        } else {
            alert("erore input")
        }
        
        


    }
        return (
            <div className="log">
                <form>
                    <input type="text" placeholder="User_Name"  onChange={(e) => setinpp(e.target.value)}/>
                    <input type="password" placeholder="Password" onChange={(e) => setinp(e.target.value)}/>
                    <input type="password" placeholder="Password" onChange={(e) => setinp2(e.target.value)}/>
                    <button onClick={iss}>
                        submite
                    </button>
                    <button>
                        <Link to="/log">
                            sing up
                        </Link>
                    </button>
                </form>
            </div>
        )
    }
    export default In;