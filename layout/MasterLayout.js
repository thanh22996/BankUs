import React from 'react';
import { Footer } from './Footer';
import Header from './Header';

function MasterLayout(props) {
    return (
        <div className="wrapper-layout">
            <Header />
            {props.children}
            <Footer />
        </div>
    );
}

export default MasterLayout;