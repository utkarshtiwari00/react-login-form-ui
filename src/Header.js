import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Nav } from 'react-bootstrap';

const Header = () => {
  
  const [auth, setAuth] = useState(null);

  useEffect(()=>{
    const user = localStorage.getItem('user');
    console.log("Res>",user);
    setAuth(user);
  },[])

  console.log(auth);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-warning">
        <div className="container-fluid">
          <Nav.Link className="navbar-brand">Navbar</Nav.Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              {auth ? <>
                <li className="nav-item">
                  <Nav.Link className="nav-link active" aria-current="page" href="/product">Product</Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link className="nav-link active" aria-current="page" href="/addproduct">Add Product</Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link className="nav-link" href="/updateproduct">Update Product</Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link className="nav-link" href="/profile">Profile</Nav.Link>
                </li>

                {/* <li className="nav-item dropdown">
                  <Nav.Link className="nav-link dropdown-toggle" href="/dropdown" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown link
                  </Nav.Link>
                </li> */}
                <li className="nav-item">
                  <Nav.Link className="nav-link" href="/logout">LogOut</Nav.Link>
                </li>
              </> : <>
               
                <Nav.Link className="nav-link" href="/">Sign_up</Nav.Link>
                <Nav.Link className="nav-link" href={'/login'}>Login</Nav.Link>
              </>
              }
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
