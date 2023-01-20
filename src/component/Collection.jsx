import React from 'react';
import lady from '../images/girlimage.png';
import picci from '../images/picciimage.png';
import beda from '../images/bedaimage.png';
const Collection = () => {
    return (
      <>
      
      <h1 style={{textAlign: 'center', color:'black'}}> EXPLORE THE COLLECTION</h1>
    
      <p style={{textAlign:'center'}}>Explore our new winter collection & get 75% yet discount</p>
        <div className="container text-center">
        <div className="row" style={{padding:'10px'}}>
          <div className="col-8 col-md-12 col-lg-4">

            <div >
                <img className='ladyimage' src={lady} alt="" />
                <div>
                    <h2> Women Glasses</h2>
                    <p>Get upto 35% discount on online order  soon!</p>
                    <button className='button'>view more</button>
                </div>
            </div>
          </div>
        
          <div className="col-8 col-md-6 col-lg-4">

            <div >
                <img className='ladyimage' src={picci} alt="" />
                <div>
                    <h2> Women Glasses</h2>
                    <p>Get upto 35% discount on online order soon!</p>
                    <button className='button'>view more</button>
                </div>
            </div>
          </div>
          <div className="col-8 col-md-6 col-lg-4">

            <div >
                <img className='ladyimage' src={beda} alt="" />
                <div>
                    <h2> Women Glasses</h2>
                    <p>Get upto 35% discount on online order  soon!</p>
                    <button className='button'>view more</button>
                </div>
            </div>
          </div>
        
          
          
        </div>
       
      </div>
      </>
    );
};

export default Collection;