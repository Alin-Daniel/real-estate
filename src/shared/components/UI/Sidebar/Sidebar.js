import React from 'react';

import NavButton from '../Button/NavButton';
import './Sidebar.scss';


const sideBar = props => {
    return <div className="sidebar">
        <NavButton show={props.show} clicked={props.toggled}/>
    </div>
};

export default sideBar;