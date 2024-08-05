import React, { useEffect, useState } from "react";
import Header from "../Header";
import axios from "axios";

const Product = () => {
  const [alldata, setAlldata] = useState();

  const getData = async() => {
     const data = await axios.get('http://localhost:5000/product');
     setAlldata(data?.data)
  }
  useEffect( () => {
    getData();
  },[])
  return (
    <>
      <Header />
      <table className="table">
        <thead className="table-dark">
          <tr>
            <th scope="col">S_No.</th>
            <th scope="col">Product</th>
            <th scope="col">Price</th>
            <th scope="col">Category</th>
            <th scope="col">Company</th>
           {/* <th scope="col">View</th> */}
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>

        </thead>
        <tbody>
          {

          
          alldata?.map( (data, index) => (<tr>
            <th scope="row">{index}</th>
            <td>{data.name}</td>
            <td>{data.price}</td>
            <td>{data.catagory}</td>
            <td >{data.company}</td>
            <td>Update</td>
            <td>Delete</td>
          </tr>
))}
        </tbody>
      </table>
    </>
  );
};

export default Product;
