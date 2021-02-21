import React from 'react'
import './SideDrawer.css'


function SideDrawer(props) {

    let SideDrawerClass = 'side-drawer';
    if(props.toggle) SideDrawerClass = 'side-drawer open'

    return (
        <nav className={SideDrawerClass}>
            <ul>
                <li> <a href='#'>Products</a></li>
                <li><a href='#'>Users</a></li>
                <li><a href='#'>API</a></li>
            </ul>
            
        </nav>
    )
}

export default SideDrawer
