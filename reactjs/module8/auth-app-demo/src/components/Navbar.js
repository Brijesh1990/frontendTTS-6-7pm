import React from 'react'
import { Nav,Button,Container } from 'react-bootstrap'
import { Link,useNavigate } from 'react-router-dom'
import { useUserAuth } from "../context/UserAuthContext";
export default function Navbar() {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (

       <Container fluid className='w-100 m-0 p-0'>
       <Nav className='nav navbar bg-dark text-white p-4'>
       <Link to="">React js Auth App</Link>
       <ul>
        <li><Link to="">Add Employee</Link></li>
        <li><Link to="">Manage Employee</Link></li>
        <li><Link to="">Welcome : {user && user.email}</Link></li>
        <li><Link to=""> <Button className='btn btn-sm btn-danger text-white' onClick={handleLogout}>
           Log out
        </Button></Link></li>
       </ul>

       </Nav>
       </Container>

  )
}
