import React from "react";
const employee=[
    {
        id:1001,
        name:"brijesh",
        age:35
    },
    {
        id:1002,
        name:"Axay",
        age:25
    },
    {
        id:1003,
        name:"parth",
        age:25
    },

    {
        id:1003,
        name:"sameer",
        age:25
    },
    {
        id:1001,
        name:"brijesh",
        age:35
    },
    {
        id:1002,
        name:"Axay",
        age:25
    },
    {
        id:1003,
        name:"parth",
        age:25
    },

    {
        id:1003,
        name:"sameer",
        age:25
    },
]

function StudentList()
{
    return (
        <>
        <h2 align='center'>Students List</h2>
        {employee && employee.map((items)=>{
            return (
                <>
                <div className="box">
                   <p>Students is :{items.id}</p> 
                   <h3>Students name :{items.name}</h3>
                   <h4>Students age :{items.age}</h4>
                </div>

                </>
            )
        })}
       

        </>
    )
}

export default StudentList