import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import MenPage from './MenPage';
import Signup from './Singup';
import Signin from './Signin';
import SingleMen from "./SingleMen"
import AdminPage from './AdminPage';

const AllRoutes = () => {
  return (
    <>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/men" element={<MenPage />} />
      <Route path="/men/:id" element={< SingleMen />} />
      <Route path="/admin" element={< AdminPage />} />
      
      {/* <Route path="/women" element={<WomenPage />} />
      <Route path="/users" element={<Users />} />
      
      <Route path="/women/:id" element={<SingleUserPage />} />
      <Route path="*" element={<NotFound />} /> */}
    <Route path="/singup" element={ <Signup />} />
    <Route path="/singin" element={ <Signin />} />

    

    </Routes>
    </>
  )
}

export default AllRoutes