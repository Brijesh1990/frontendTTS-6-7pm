import React from "react";
function EmployeeList(props)
{
    return(
        <>
        <h2>Employee List is :{props.name}</h2>

        </>
    ) 

}

function EmployeeData(props)
{
    return(
        <>
        <EmployeeList name="Axay khanna" />
         <h3>Employee Address is :{props.address}</h3>
        </>
    )
}

export default EmployeeData