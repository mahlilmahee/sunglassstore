import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">MAHEE</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">SHOP</a>
              </li>
             
              <li className="nav-item">
                <a className="nav-link" href="#">NEW</a>
              </li>
             
              <li className="nav-item">
                <a className="nav-link" href="#">TREND</a>
              </li>
             
              <li className="nav-item">
                <a className="nav-link" href="#">BLOGS</a>
              </li>
             
              <li className="nav-item">
                <a className="nav-link" href="#">SUNGLASSES</a>
              </li>
             
              <li className="nav-item">
                <a className="nav-link" href="#">FRAME</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">PAGE</a>
              </li>
             
            </ul>
            <form className="d-flex" role="search">
            
              <button className="button" type="submit">CONTACT US</button>
            </form>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;