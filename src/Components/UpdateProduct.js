import React from 'react'
import Header from '../Header'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const UpdateProduct = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [repassword, setRePassword] = useState("");
  const [err, setErr] = useState(false);
   const navigate = useNavigate();

  function getfromData(e){
    e.preventDefault();
    localStorage.setItem("user",JSON.stringify('hii'));
     navigate("/product");
      }
  return (
    <>
    <Header/> 
      <div>
      <section class="vh-40 bg-image"
  style={{backgroundImage: "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp');"}}>
  <div class="mask d-flex align-items-center h-100 gradient-custom-3">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
          <div class="card" style={{borderRadius:"15px;"}}>
            <div class="card-body p-5">
              <h2 class="text-uppercase text-center mb-5">Update Product</h2>

              <form onSubmit={getfromData}>

                <div data-mdb-input-init class="form-outline mb-4">
                  <input type="text" id="form3Example1cg" class="form-control form-control-lg" placeholder='Product Name' /><br/>
                  {err && !name && <span className='error' style={{ opacity: 1,color:'red', fontSize:'20px'}}>Name Required</span>}
                </div>

                <div data-mdb-input-init class="form-outline mb-4">
                  <input type="number" id="form3Example3cg" class="form-control form-control-lg" placeholder=' Product Price' /><br/>
                  {err && !email && <span className='error' style={{ opacity: 1 ,color:'red', fontSize:'20px'}}>Email Required</span>}
                </div>

                <div data-mdb-input-init class="form-outline mb-4">
                  <input type="text" id="form3Example4cg" class="form-control form-control-lg" placeholder=' Product Company'/><br/>
                  {err && !password && <span className='error3' style={{ opacity: 1,color:'red', fontSize:'20px' }}>Password Required</span>}
                </div>

                <div data-mdb-input-init class="form-outline mb-4">
                  <input type="text" id="form3Example4cdg" class="form-control form-control-lg" placeholder='Product Catagory' /><br/>
                  {err && !repassword && <span className='error4' style={{ opacity: 1,color:'red', fontSize:'20px'}}>Re-password Required</span>}
                </div>

                <div class="d-flex justify-content-center">
                  <button  type="submit" data-mdb-button-init
                    data-mdb-ripple-init class="btn btn-success btn-block btn-lg gradient-custom-4 text-body" >Update</button>
                </div>

              </form>

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

export default UpdateProduct
