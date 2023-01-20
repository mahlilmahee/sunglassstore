import React from "react";
import pic from "../images/sunglassOne.png";
const Banner = () => {
  return (
    <div className="banner" style={{marginTop:'100px', marginBottom:'100px'}}>
      <div className="container text-center">
        <div className="row">
          <div className=" col-12  col-lg-6">
            <div>
              <h1 className="glasstext">TAKE YOUR BEST GLASSES </h1>
              <p className="bannertext">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour.
              </p>
              <div className="input-group mb-3">
  <input type="text" className="form-control" placeholder="search your glasses" aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <button className="button" type="button" id="button-addon2">Button</button>
</div>

            </div>
          </div>
          <div className="col-12  col-lg-6 divtwo">
            <img src={pic} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
