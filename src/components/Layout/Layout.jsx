import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Routers from '../../Routes/Routers';

const Layout = () => {
    return (
        <>
            <Header/>
            <div className="container">
                <Routers/>
            </div>
            <Footer/>
        </>
    );
}

export default Layout;