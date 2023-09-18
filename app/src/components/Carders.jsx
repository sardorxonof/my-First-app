import React from "react";
import "../style/cads.css"
function Carders() {
    return (
        <div className="card">
            <div className="cards">
                <input type="text" placeholder="Title" minLength="10" maxLength="15" />
                <textarea cols="80" rows="10" placeholder="Text"></textarea>
            </div>
        </div>
    )
}
export default Carders;