import React from "react";
function Header()
{
    return (
        <>
            <div className="w-full p-7 bg-black text-white flex">
            <div className="flex-row">
                <h3 className="text-3xl ms-9">Call us :(91)9998003879</h3>
            </div>

            <div className="flex-row ms-40">
                <input type="text" placeholder="search anythings here" className="w-128 p-3" />
            </div>

            <div className="flex-row ms-40">
            <span className="text-3xl ms-6">
                <span className="bi bi-facebook text-white"></span>
                <span className="bi bi-twitter ms-4 text-white"></span>
          
                <span className="bi bi-facebook ms-5 text-white"></span>
                <span className="bi bi-twitter ms-4 text-white"></span>
          
            </span>
            </div>

            

            </div>
        </>
    )
}

export default Header