import React from 'react'
import './SideDrawer.css'


function SideDrawer(props) {

    let SideDrawerClass = 'side-drawer';
    if(props.toggle) SideDrawerClass = 'side-drawer open'

    return (
        <nav className={SideDrawerClass}>
            <ul>
                <li> <a href='/details'>Products</a></li>
                <li><a href='/details'>Users</a></li>
                <li><a href='/details'>API</a></li>
                <div className='credits'>Developed by David Kessel✌🏼</div>
            </ul>
            
        </nav>
    )
}

export default SideDrawer
