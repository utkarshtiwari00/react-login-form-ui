import React from 'react'
import { useNavigate } from 'react-router-dom';
//import { Nav } from 'react-bootstrap';
import Header from '../Header';

const LogOut = () => {
  const navigate = useNavigate();
  
  function getfromData(e){
    e.preventDefault();
    navigate('/');
  
    // localStorage.setItem("user",JSON.stringify('hii'));
    //  navigate("/product"); 
     }

  // navigate('/');
   localStorage.clear();

  return (
    <>
    <Header/>
    <div>
      <h2>Successfully logout</h2>
     {/*<button> <Nav.Link className="nav-link" href="/">Sign_up</Nav.Link></button> */}
    </div>
    </>
  )
}

export default LogOut
