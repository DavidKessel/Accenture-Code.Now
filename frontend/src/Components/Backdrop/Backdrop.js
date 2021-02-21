import React from 'react'
import './Backdrop.css'


function Backdrop(props) {
    return (
        <div className='backdrop' onClick={(e) => props.closeSideDrawer()}/>
    )
}

export default Backdrop
