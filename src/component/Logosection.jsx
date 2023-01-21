import React from 'react';
import logo1 from '../images/logo1.png'
import logo2 from '../images/logo2.png'
import logo3 from '../images/logo3.png'
import logo4 from '../images/logo4.png'
import logo5 from '../images/logo5.png'
const Logosection = () => {
    return (
        <div style={{marginTop:'100px', marginBottom:'20px'}} class="container text-center">
        <div class="row gx-2">
          <div class="col-6 col-md-4 col-lg-2">
            <img src={logo1} alt="" />
          </div>
          <div class="col-6 col-md-4 col-lg-3">
          <img src={logo2} alt="" />
          </div>
          <div class="col-6 col-md-4 col-lg-2">
          <img src={logo3} alt="" />
          </div>
          <div class="col-6 col-md-4 col-lg-3">
          <img src={logo4} alt="" />
          </div>
          <div class="col-6 col-md-4 col-lg-2">
          <img src={logo5} alt="" />
          </div>
         
        </div>
      </div>
    );
};

export default Logosection;