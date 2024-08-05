import React from 'react'
import { Navigate,useNavigate } from 'react-router-dom';
import Header from '../Header';
const Login = () => {
  const navigate= useNavigate();
  function getfromData(e){
    e.preventDefault();
    localStorage.setItem("user",JSON.stringify('hii'));
    navigate("/product");
  }

  return (
    <>
    <Header/>
    <div>
      <section class="vh-20 gradient-custom">
        <div class="container py-5 h-100" >
          <div class="row d-flex justify-content-center align-items-center h-50">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
              <div class="card bg-dark text-white" style={{ borderRadius: "1rem;" }}>
                <div class="card-body p-5 text-center">

                  <div class="mb-md-5 mt-md-4 pb-5">

                    <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                    <p class="text-white-50 mb-5">Please enter your Email and password for login!</p>

                    <div data-mdb-input-init class="form-outline form-white mb-4">
                      <input type="email" id="typeEmailX" class="form-control form-control-lg" />
                      <label class="form-label" for="typeEmailX">Email</label>
                    </div>

                    <div data-mdb-input-init class="form-outline form-white mb-4">
                      <input type="password" id="typePasswordX" class="form-control form-control-lg" />
                      <label class="form-label" for="typePasswordX">Password</label>
                    </div>

                    <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>

                    <button data-mdb-button-init data-mdb-ripple-init class="btn btn-outline-light btn-lg px-5" type="submit" onClick={getfromData}>Login</button>
                  </div>

                  <div>
                    <p class="mb-0">Don't have an account? <a href="#!" class="text-white-50 fw-bold">Sign Up</a>
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default Login
