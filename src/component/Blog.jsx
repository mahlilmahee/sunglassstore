import React from 'react';
import blog1 from '../images/blog1.png'
import blog2 from '../images/blog2.png'
import blog3 from '../images/blog3.png'
const Blog = () => {
    return (
        <div style={{textAlign:'center', marginBottom:'100px'}}>
            
            <h1>FROM OUR BLOG</h1>
            <p>There are many variations of passages of Lorem Ipsum available, but r</p>
            <div class="container text-center">
  <div class="row">
    <div class="col-10 col-md-4 col-lg-4">
   <div style={{textAlign:'left'}}>
    <img src={blog1}width="100%" alt="" />
    <p>30 julay, 2023 / eyeglasses</p>
    <h6>Meet the Former Model Designing Couture-Level Accessories in Paris</h6>
    <h5 style={{color:'red'}}>Read more</h5>
   </div>
    </div>
    <div class="col-10 col-md-4 col-lg-4">
   <div style={{textAlign:'left'}}>
    <img src={blog2}width="100%" alt="" />
    <p>30 julay, 2023 / eyeglasses</p>
    <h6>Meet the Former Model Designing Couture-Level Accessories in Paris</h6>
    <h5 style={{color:'red'}}>Read more</h5>
   </div>
    </div>
    <div class="col-10 col-md-4 col-lg-4">
   <div style={{textAlign:'left'}}>
    <img src={blog3}width="100%" alt="" />
    <p>30 julay, 2023 / eyeglasses</p>
    <h6>Meet the Former Model Designing Couture-Level Accessories in Paris</h6>
    <h5 style={{color:'red'}}>Read more</h5>
   </div>
    </div>
  </div>
 
</div>
        </div>
    );
};

export default Blog;