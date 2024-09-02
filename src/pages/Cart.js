import React from 'react'
import ShoppingCart from '../components/ShoppingCart';
import TopNavBar from '../components/TopNavBar';
import NavBar from '../components/NavBar';
import Footer from "../components/Footer";

function Cart() {
  return (
    <>
     <TopNavBar/>  
     <NavBar/>
     <ShoppingCart/>
     <Footer/>

    </>
  )
}

export default Cart