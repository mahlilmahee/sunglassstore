import React from 'react';
import fotlogo from '../images/footerlogo.png'
import fb from '../images/facebook 1.png'
import  twit from '../images/twitter.png'
import insta from '../images/insta.png'
import link from '../images/linkedin 1.png'
import pin from '../images/pinterest.png'
import google from '../images/paly.png'
import apple from '../images/apple.png'
import pay from '../images/payment.png'
const Footer = () => {
    return (
        <div style={{textAlign:'center'}}>
            <div class="container text-center">
  <div class="row">
    <div class="col-12 col-md-3 col-lg-3" style={{textAlign:'left'}}>
      <div>
        <img src={fotlogo} alt="" />
        <p>60, 29th Street #343, San Francisco, CA 94110, United States of America</p>
        <p>Call now :- +391 (0)35 2568 4593</p>
        <img src={fb} alt="" style={{marginRight:'5px'}} />
        <img src={twit} alt=""  style={{marginRight:'5px'}}/>
        <img src={insta} alt="" style={{marginRight:'5px'}} />
        <img src={link} alt=""  style={{marginRight:'5px'}}/>
        <img src={pin} alt="" style={{marginRight:'5px'}} />
      </div>
    </div>
    <div class="col-12 col-md-3 col-lg-3 footer" style={{marginTop:'40px'}}>
      <h4 style={{marginBottom:'30px'}}>INFORMATION</h4>
      <p>Delivery information</p>
      <p>Terms and condition </p>
      <p>Help and FAQS</p>
      <p>ABOUT US</p>
    </div>
    <div class="col-12 col-md-3 col-lg-3 footer"  style={{marginTop:'40px'}}>
    <h4>NEW ARRIVAL</h4>
      <p>RAY BAN </p>
      <p>muse jeanniy black </p>
      <p>barbara black</p>
      <p>marlene blue\tortoise</p>
    </div>
    <div class="col-12 col-md-3 col-lg-3 "  style={{marginTop:'40px'}}>
     <h2>Download the app</h2>
     <img src={google} alt="" />
     <img src={apple} alt="" />
    </div>
  </div>
</div>
<img style={{marginTop:'100px', marginBottom:'20px'}} src={pay} alt="" />
        </div>
    );
};

export default Footer;