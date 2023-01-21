import React from 'react';
import one from '../images/carone.png';
import two from '../images/cartwo.png';
import three from '../images/carthree.png';
const Shipping = () => {
    return (
        <div>
            <div class="container text-center">
  <div class="row" style={{display:'flex',alignItems: 'center',justifyContent: 'space-between'}}>
    <div class="col-12 col-md-6 col-lg-6">
     <h1> ENJOY THE ONE AND GET A SPECIAL WELCOME REWARD</h1>
    </div>
    <div class="col-12 col-md-6 col-lg-6">
   <input placeholder="Your email " className="emailinput" type="text" />
  <button class="buttonthird">Submit</button>
    </div>
   
  </div>
  <div class="row" style={{marginBottom:'100px', marginTop:'100px'}}>
    <div class="col-12 col-md-4 col-lg-4">
  <img src={one} alt="" />
    </div>
    <div class="col-12 col-md-4 col-lg-4">
<img src={two} alt="" />
    </div>
    <div class="col-12 col-md-4 col-lg-4">
     <img src={three} alt="" />
    </div>
  </div>
</div>
        </div>
    );
};

export default Shipping;