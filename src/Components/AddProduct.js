import React from 'react'
import Header from '../Header'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("")
  const [company, setCompany] = useState("")
  const [catagory, setCatagory] = useState("");
  const [err, setErr] = useState(false);
  const navigate = useNavigate();


  const getfromData = async(e) => {
    e.preventDefault();
console.log(name,price,company,catagory)
    const data = await axios.post('http://localhost:5000/product',{
       name:name,
       price:price,
       company:company,
       catagory:catagory
     });


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
              <h2 class="text-uppercase text-center mb-5">Add Product</h2>

              <form onSubmit={getfromData}>

                <div data-mdb-input-init class="form-outline mb-4">
                  <input type="text" id="form3Example1cg" value={name} class="form-control form-control-lg" placeholder='Product Name'onChange={(e)=>setName(e.target.value)}/><br/>
                  {err && !name && <span className='error' style={{ opacity: 1,color:'red', fontSize:'20px'}}>Name Required</span>}
                </div>

                <div data-mdb-input-init class="form-outline mb-4">
                  <input type="number" id="form3Example3cg" value={price}  class="form-control form-control-lg" placeholder=' Product Price'onChange={(e)=>setPrice(e.target.value)} /><br/>
                  {err && !price && <span className='error' style={{ opacity: 1 ,color:'red', fontSize:'20px'}}>Price Required</span>}
                </div>

                <div data-mdb-input-init class="form-outline mb-4">
                  <input type="text" id="form3Example4cg" value={company} class="form-control form-control-lg" placeholder=' Product Company' onChange={(e)=>setCompany(e.target.value)}/><br/>
                  {err && !company && <span className='error3' style={{ opacity: 1,color:'red', fontSize:'20px' }}>Company Required</span>}
                </div>

                <div data-mdb-input-init class="form-outline mb-4">
                  <input type="text" id="form3Example4cdg" value={catagory} class="form-control form-control-lg" placeholder='Product Catagory' onChange={(e)=>setCatagory(e.target.value)}/><br/>
                  {err && !catagory && <span className='error4' style={{ opacity: 1,color:'red', fontSize:'20px'}}>Catagory Required</span>}
                </div>

                <div class="d-flex justify-content-center">
                  <button  type="submit" data-mdb-button-init
                    data-mdb-ripple-init class="btn btn-success btn-block btn-lg gradient-custom-4 text-body" >Add</button>
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

export default AddProduct
