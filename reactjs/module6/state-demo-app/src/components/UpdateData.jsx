import React,{useState} from 'react'
function UpdateData()
{
    // destructuring of state
     const[name,setName]=useState({
        
        nm:"brijesh",
        age:35,
        address:"150 feet ring road rajkot 360005"
     });

     //create a function for update data
     const UpdData=()=>{
        setName({
            nm:"Sameer",
            age:22,
            address:"Raiya road behind tulsi super market Rajkot 360005"
        })
     }

    return (

        <>

        <h2>My name is :{name.nm} <br /> and my age is :{name.age}  <br/> and my address is :{name.address}</h2>

        <h3><button type='button' onClick={UpdData}>Update Data</button></h3>
        </>
    )
}

export default UpdateData