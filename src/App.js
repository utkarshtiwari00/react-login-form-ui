import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Private from './Components/Private';
import Sign_up from './Components/Sign_up';
import LogOut from './Components/LogOut';
import Login from './Components/Login';
import Footer from './Footer';
import Product from './Components/Product';
import AddProduct from './Components/AddProduct';
import UpdateProduct from './Components/UpdateProduct';
import Profile from './Components/Profile';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/logout' element={<LogOut />} />
      </Routes>
     
      <Routes>
        <Route element={<Private />}>
          <Route path='/product' element={<Product/>} />
          <Route path='/addproduct' element={<AddProduct />} />
          <Route path='/updateproduct' element={<UpdateProduct />} />
          <Route path='/profile' element={<Profile />} />
          
        </Route>


        <Route path='/' element={<Sign_up />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>


  );
}

export default App;