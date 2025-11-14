import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import payment from'../img/payment.png'
const Footer = () => {
    return (
 <footer className="main">
 <div className="footer-content">
     <div className=" logo">
        <h3 className="logo-title">Logo</h3>
        <p className="logo-text">
         انضم إلينا واستكشف كنوز الطبيعة من خلال كتبنا 
         المختارة بعناية.
        </p>
    </div>
 <div className=" links-column">
    <h3 className="column-title">الموقع</h3>
      <ul className="footer-links">
         <li><span className="link-arrow">›</span> <Link to="/">الرئيسية</Link></li>
        <li><span className="link-arrow">›</span> <Link to="/books">جميع الكتب</Link></li>
        <li><span className="link-arrow">›</span> <Link to="/products">منتجات جديدة</Link></li>
        <li><span className="link-arrow">›</span> <Link to="/nn">المذكرات</Link></li>
        <li><span className="link-arrow">›</span> <Link to="/reviews">المراجعات</Link></li>
         </ul>
  </div>
 <div className=" policy-column">
   <h3 className="column-title">سياسة الموقع</h3>
    <ul className="footer-links">
      <li><span className="link-arrow">›</span> <Link to="/terms">الشروط والأحكام</Link></li>
      <li><span className="link-arrow">›</span> <Link to="/shipping">سياسة الشحن</Link></li>
       <li><span className="link-arrow">›</span> <Link to="/privacy">الخصوصية</Link></li>
     </ul>
     </div>
  <div className="contact-column">
      <h3 className="column-title">تواصل معنا</h3>
      <ul className="contact-info">
        <li><span className="contact-icon"> <i class="fa-solid fa-location-dot"></i> </span>  Danwers, NY City, USA, 70-102 </li>
        <li><span className="contact-icon"><i class="fa-solid fa-envelope"></i></span> Info.Example@Gmail.com</li>
         <li><span className="contact-icon"><i class="fa-solid fa-phone"></i> </span> 91+585-656-658</li>
     </ul>
    </div>
    </div>
            
            <div className="footer-bottom-bar">
                <div className="payment-social">
                  
                    <div className="payment-icons">
                       <img src={payment}/>
                    </div>
                  <div className="social-icons">
                    
                    <i class="fa-brands fa-instagram"></i>
                     <i class="fa-brands fa-twitter"></i> 
                       <i class="fa-brands fa-youtube"></i>
                       <i class="fa-brands fa-facebook"></i> 

                       </div>
                </div>
                
                
                <div className="copyright">
                    جميع الحقوق محفوظة 2024 ©
                </div>
            </div>
        </footer>
    );
};

export default Footer;
                    