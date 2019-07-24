//import Statements
import React from "react";
import ReactDOM from "react-dom";
import "./Style.css"; //External Style Links
import Plan from "./Plan.js"; //External Javascript Links

var destination = document.querySelector("#container");

ReactDOM.render(
    <div>
        <Plan/>
    </div>,
    destination
);