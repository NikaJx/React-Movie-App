import React from 'react';
import { Link } from 'react-router-dom';

import userImg from '../../images/user.png';

import '../../styles/Header.scss';

const Header = () => {
    return (
        <div className='header'>
            <Link to='/'>
                <div className="logo">Movie App</div>
            </Link>
            <div className="user__image">
                <img src={userImg} alt="user" />
            </div>
        </div>
    );
}

export default Header;