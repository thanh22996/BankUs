import React from 'react';
import Header from './Header';

function MasterLayout(props) {
    return (
        <div className="wrapper-layout">
            <Header />
            {props.children}
        </div>
    );
}

export default MasterLayout;