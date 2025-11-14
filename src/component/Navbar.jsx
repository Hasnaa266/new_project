import React, { useState } from 'react';
import logo from '../img/logo.png';
import "./navbar.css";
import { Link } from 'react-router-dom';

function Navbars() {
    const[menuopen,setmenuopen]=useState(false);
    return(
        <nav className="navbar-container">
          < ul className={`nav-links ${menuopen ? "active" : ""}`}>
                <li ><Link to='/' onClick={()=>setmenuopen(false)}>الرئيسية</Link></li>
                <span className='dash'>|</span>
                <li > <Link to='/books' onClick={()=>setmenuopen(false)}>جميع الكتب </Link></li>
                 <span className='dash' >|</span>
                <li><Link to='/Products' onClick={()=>setmenuopen(false)}>المنتجات الجديدة</Link></li>
                 <span className='dash'>|</span>
                <li><Link to='/nn' onClick={()=>setmenuopen(false)}>المذكرات</Link></li>
                 <span className='dash'>|</span>
                <li><Link to='المراجعات' onClick={()=>setmenuopen(false)}>المراجعات</Link></li>
            </ul>
            <div className='search-section'>
                <input type='text' placeholder='ابحث باسم الكتاب,المؤلف,العنوان'></input>
                <button>🔍</button>
            </div>

            <div className='icon'>
        <i className="fa-solid fa-user"></i>
        <i className="fa-solid fa-bookmark"></i>
        <a>
        <i className="fa-solid fa-cart-shopping"></i>
          </a>
    </div>
            <div className='language'>
                <select>
               <option> EN  </option>
               <option> ar  </option>
                </select>
            </div>
      
         <div className="logo">
                <img src={logo}/>
            </div>
            < div className='menu-icon' onClick={()=> setmenuopen(!menuopen)}>
            ☰
            </div>
         
</nav>

    );
}
export default Navbars;
