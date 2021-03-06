import './Header.css'
import React from 'react';
import { Link } from 'react-router-dom';

function header(props) {
    return (
        <div className="header">
            <div className="left">
                <Link to={`/`}>
                    <h2>My Friends</h2>
                </Link>
            </div>
            <div className="right">
                <Link to={`/friend-list`}>
                    <p>Friend List</p>
                </Link>
                <Link to={`/login`}>
                    <p>Login</p>
                </Link>
            </div>
        </div>
    )
};


export default header;

