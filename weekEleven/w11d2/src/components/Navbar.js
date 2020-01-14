import React from 'react';

import '../App.css';

function Navbar(props) {
    const tabs = props.tabs

    const navItems = tabs.map(tab => {
        let r = `/${tab}`;
        
        return <li><Link to={r}>{tab}</Link></li>
    })
      return (
            <ul>{navItems}</ul>
        );
    };


export default Navbar;