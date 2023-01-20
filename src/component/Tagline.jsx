import React from 'react';
import sunglass from '../images/sunglassoverlay.png'
import eyeglass from '../images/eyeglassoverlay.png'
const Tagline = () => {
    return (
        <div class="container text-center">
        <div class="row tagline justify-content-md-center">
          <div class="col-8 col-lg-6">
          <div class="taglinediv">
            <img src={sunglass} alt="" />
            <div className='imgoverlaytext'>
                <h2>EYEGLASSES</h2>
                <p>Started from $20</p>
                <button className="buttontwo">view in shop</button>
            </div>
          </div>
          </div>
          <div class="col-8 col-lg-6">
          <div class="taglinediv">
            <img src={eyeglass} alt="" />
            <div className='imgoverlaytext'>
                <h2>SUNGLASSES</h2>
                <p>Started from $15</p>
                <button className="buttontwo">view in shop</button>
            </div>

          </div>
          </div>
        
        </div>
       
      
      </div>
    );
};

export default Tagline;