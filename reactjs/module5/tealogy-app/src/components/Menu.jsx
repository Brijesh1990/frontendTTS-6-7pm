import React from "react";
import Header from "./Header";
import Footer from "./Footer";
const menulist=[
    {
        id:101,
        photo:"https://www.hersheyland.in/content/dam/Hersheyland_India/en_in/products/milkshakes/milkshake-vanilla-180ml-FOP.png",
        menuname:"Mil shake",
        oldprice:"45",
        newprice:"38"
    },
    {
        id:102,
        photo:"https://thescranline.com/wp-content/uploads/2023/06/RED-VELVET-CAKE-23-S-01.jpg",
        menuname:"Red volvate cake",
        oldprice:"120",
        newprice:"100"
    },

    {
        id:103,
        photo:"https://www.allrecipes.com/thmb/jxasvySbtNt0lDcuXwXGj_L0pBo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-518858391-2000-955fb0e2dbd64d008ec3628fd9988371.jpg",
        menuname:"star bucks cofee",
        oldprice:"680",
        newprice:"580"
    },

    {
        id:103,
        photo:"https://www.allrecipes.com/thmb/jxasvySbtNt0lDcuXwXGj_L0pBo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-518858391-2000-955fb0e2dbd64d008ec3628fd9988371.jpg",
        menuname:"star bucks cold coffe",
        oldprice:"680",
        newprice:"580"
    },


    {
        id:101,
        photo:"https://www.hersheyland.in/content/dam/Hersheyland_India/en_in/products/milkshakes/milkshake-vanilla-180ml-FOP.png",
        menuname:"Mil shake",
        oldprice:"45",
        newprice:"38"
    },
    {
        id:102,
        photo:"https://thescranline.com/wp-content/uploads/2023/06/RED-VELVET-CAKE-23-S-01.jpg",
        menuname:"Red volvate cake",
        oldprice:"120",
        newprice:"100"
    },

    {
        id:103,
        photo:"https://www.allrecipes.com/thmb/jxasvySbtNt0lDcuXwXGj_L0pBo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-518858391-2000-955fb0e2dbd64d008ec3628fd9988371.jpg",
        menuname:"star bucks cofee",
        oldprice:"680",
        newprice:"580"
    },

    {
        id:103,
        photo:"https://www.allrecipes.com/thmb/jxasvySbtNt0lDcuXwXGj_L0pBo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-518858391-2000-955fb0e2dbd64d008ec3628fd9988371.jpg",
        menuname:"star bucks cold coffe",
        oldprice:"680",
        newprice:"580"
    },
]
function Menu() {
    return (
        <>
            < Header />
            <div className="container">
                <div className="row">
                    <h2 className="h2 text-blue-950 mt-5" style={{ textAlign: "center" }}>Menu List</h2>
                    <hr />

                    {menulist && menulist.map((items)=>{
   

                     return (
                        <>

                        <div className="col-md-3 mt-4 shadow border border-gray-400 mt-4">
                        <img src={items.photo} alt="coffe" className="img-fluid" style={{width:"100%",height:"250px"}}  />
                        <p className="text-center fs-4 mt-2">{items.menuname}</p>
                        <p className="text-center fs-5">Rs &nbsp;<del>{items.oldprice}</del> {items.newprice}</p>
                        <p className="text-center"><button type="button" className="bg-black text-white mt-3 p-2">Order Now</button></p>
                        <p className="mb-4"></p>   
                        </div>
                        </>
                     )


                    })}
                  
                
                  
                </div>
            </div>
            < Footer />
        </>
    )
}
export default Menu