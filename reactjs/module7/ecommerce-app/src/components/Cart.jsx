import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';
import cart from '../assets/images/cart.webp';
import NavbarApp from './Navbar'
import Footer from './Footer'
import Swal from 'sweetalert2';
export default function Cart() {

  // display cart
  const[data,setData]=useState([]);
  const Navigate=useNavigate();
  useEffect(()=>{
    axios.get(`http://localhost:8000/cart`).then((response)=>{
      setData(response.data);

    })
  })
  return (
   
   <>
  {/* be-pro hero-section start here */}
  {/* be-pro content start here */}
  <NavbarApp />
  <section id="content">
    <div className="container mt-5">
      {/* <div className="row">
        <div className="col-md-12 mx-auto">
          <div className="card">
            <div className="card-header bg-white shadow">
              <a href="/" className="navbar-brand pro-logo text-dark">
                Be-pro
              </a>
            </div>
            <div className="card-body p-5 mt-0">
              <p className="text-center">
                <img src={cart} className="img-fluid w-25" />
              </p>
              <h3 className="text-center">Missing Cart items?</h3>
              <p className="text-center">
                Login to see the items you added previously
              </p>
              <p className="text-center">
                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#log"
                  data-bs-dismiss="modal"
                  className="btn btn-lg btn-primary bg-primary border border-0"
                >
                  Login
                </button>
              </p>
            </div>
          </div>
        </div>
      </div> */}

      {/* display the carts data */}


     <div className='card'>
      <div className='card-header'>View Cart ()</div>
      <div className='card-body'>
        <table className='table table-responsive'>
          <tr>
            <th>photo</th>
            <th>Productname</th>
            <th>Offerprice</th>
            <th>Qty</th>
            <th>Subototal</th>
            <th>Action</th>
          </tr>
          {data && data.map((items)=>{
            return (
              <>

          <tr>
          <td><img src={items.image} alt='products' style={{width:"80px",height:"80px"}} /></td>
          <td>{items.productname}</td>
          <td>{items.offerprice1}</td>
          <td><input type="number" value='1' min="1" max="10" /></td>
          <td>{items.offerprice2}</td>
          <td><button type='button' onClick={()=>{Navigate(`/delete-cart/${items.id}`)}} className='btn btn-sm btn-danger bg-danger text-white'><span className='bi bi-trash'></span></button></td>
          </tr>
              </>
            )
          })}

          <tr>
            <td colSpan="6"><h2 align='right' className='bg-dark p-2 text-white'>Subtotals of Products is Rs.{}</h2></td>
          </tr>

          <tr>
            <td colSpan="6">
              <Link to="/checkout-here"><button type='button' className='btn btn-dark text-white bg-dark fs-3 w-50 float-end'>Contine for CheckOut</button></Link>
            </td>
          </tr>
        </table>
      </div>
     </div>
      

    </div>
  </section>
  <Footer />

   </>
  )
}
