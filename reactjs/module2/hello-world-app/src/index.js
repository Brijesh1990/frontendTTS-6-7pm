import React from "react";
import ReactDOM from "react-dom/client";
import MyApp from "./MyApp";
const root=ReactDOM.createRoot(document.getElementById("demo-app"));
root.render(
    <>
    <h1 align='center' style={{fontSize:"85px"}}>Hello world</h1>
    <MyApp />
    </>
    
)