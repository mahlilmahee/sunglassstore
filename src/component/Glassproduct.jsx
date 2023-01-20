import React from 'react';
import glass1 from '../images/glass1.png'
import glass2 from '../images/glass2.png'
import glass3 from '../images/glass3.png'
import glass4 from '../images/glass4.png'
import glass5 from '../images/glass5.png'
import glass6 from '../images/glass6.png'
const Glassproduct = () => {
    return (
        <div style={{marginTop:'130px', textAlign:'center'}}>

            <h1 style={{fontWeight:'700', fontSize:'3.3rem'}}>NEW PRODUCT FROM US</h1>
            <p style={{fontWeight:'400',marginBottom:'100px'}}>Explore our new winter collection & get 75% yet discount</p>
            <div class="container text-center">
  
  <div class="row gx-3">
    <div class="col-10 col-md-4 col-lg-4">
     <img src={glass1} width="100%" alt="simple glass image" />
    </div>
    <div class="col-10 col-md-4 col-lg-4">
    <img src={glass2} width="100%" alt="simple glass image" />
    </div>
    <div class="col-10 col-md-4 col-lg-4">
    <img src={glass3} width="100%" alt="simple glass image" />
    </div>
    <div class="col-10 col-md-4 col-lg-4">
    <img src={glass4} width="100%" alt="simple glass image" />
    </div>
    <div class="col-10 col-md-4 col-lg-4">
    <img src={glass5} width="100%" alt="simple glass image" />
    </div>
    <div class="col-10 col-md-4 col-lg-4">
    <img src={glass6} width="95%" alt="simple glass image" />
    </div>
  </div>
</div>
        </div>
    );
};

export default Glassproduct;