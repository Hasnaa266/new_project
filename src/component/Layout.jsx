import {  Fragment } from "react";
import { Outlet } from "react-router-dom";
import Navbars from './Navbar';
import Footer from'../component/Footer';
import Books from "../pages/Books";


const Layout = () =>{
    return(
        <Fragment>
            <Navbars />
            <main>
               <Outlet/>
              
            </main>
            
           <Footer/>
        </Fragment>
    )
}


export default Layout ;
