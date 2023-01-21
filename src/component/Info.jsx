import React from 'react';
import { Link } from 'react-router-dom';

const Info = () => {
    return (
        <div className="info">

            <h1>ABOUT US</h1>
            <p><Link to='/' style={{color: 'black', textDecoration:'none', fontWeight:'700'}}>Home</Link> /<span style={{color:'orange'}}> ABOUR US</span> </p>
        </div>
    );
};

export default Info;