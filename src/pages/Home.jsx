import React from "react";
import Header from "../component/Header";
import Books from "./Books";
import Discover from "./Discovery";
import Products from "./Products";
import Nots from "./Nots";
import ALL from "./All";
const Home = ()=>{
    return(
       <div>       

          <Header/> 
          <Books/>
          <Discover/>   
          <Products/>
          <Nots/>
          <ALL/>
       </div> 
      

    )
}


export default Home;