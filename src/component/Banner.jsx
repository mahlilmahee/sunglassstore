import React from "react";
import pic from "../images/sunglassOne.png";
const Banner = () => {
  return (
    <div className="banner">
      <div class="container text-center">
        <div class="row">
          <div class=" col-12 col-md-12 col-lg-6">
            <div>
              <h1 className="glasstext">TAKE YOUR BEST GLASSES</h1>
              <p className="bannertext">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour.
              </p>
              <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="search your glasses" aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <button class="button" type="button" id="button-addon2">Button</button>
</div>

            </div>
          </div>
          <div class="col-12 col-md-12 col-lg-6 divtwo">
            <img src={pic} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
