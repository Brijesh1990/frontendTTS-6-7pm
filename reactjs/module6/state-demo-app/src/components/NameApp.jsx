import React,{useState} from "react";
function NameApp()
{
    // destructuring of state
    const[name,setName]=useState("Brijesh");
    return (
        <>
        
        <h1>My name is :{name}</h1>
        <button type="button" onClick={()=>setName("bhautik")} style={{backgroundColor:"black",color:"white"}}>Update Name</button>

        </>
    )
}

export default NameApp