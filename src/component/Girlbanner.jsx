import React from 'react';
import girl from '../images/girlbio.png'
import logo from '../images/girllogo.png';
const Girlbanner = () => {
    return (
        <div style={{marginTop:'100px', marginBottom:'100px'}} className="girl">

            <div class="container text-center">
  <div class="row gx-5" style={{alignItems: 'center'}}>
    <div class="col-10 col-md-7 col-lg-7">
    <img src={girl} width="90%" alt="" />
    </div>
    <div class="col col-md-5 col-5">
     <h1>BLUE LIGHT BLOCKING GLASSES FOR OUR CUSTOMERS</h1>
     <h6>There are many variations of passages of Lorem</h6>
     <p>There are many variations of passages of Lorem Ipsum have available, but the majority have suffered alteration</p>
     <button className='button'>Shop now</button>
    </div>
  </div>
  
</div>
<img className='girllogo' src={logo} alt="" />
        </div>
    );
};

export default Girlbanner;