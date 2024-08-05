import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const Private = () => {
  const user = localStorage.getItem('user');  
  return user?<Outlet/>:<Navigate path={'/'}/>
}

export default Private
