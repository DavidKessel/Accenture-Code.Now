import React, { Component } from 'react'
import Backdrop from '../Backdrop/Backdrop'
import Navbar from './Navbar/Navbar'
import SideDrawer from './SideDrawer/SideDrawer'

export default class Navigation extends Component {
    constructor(props){
        super(props);
        this.state = {
            openSideDrawer: false
        }
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {openSideDrawer: !prevState.openSideDrawer}
        })
    }

    backDropClickHandler = () => {
        this.setState({openSideDrawer: false})
    }


    render() {
        let backDrop;
        if(this.state.openSideDrawer){
            backDrop = <Backdrop closeSideDrawer={this.backDropClickHandler}/>;
        }
        return (
            <div>
                <Navbar drawerClickHandler={this.sideDrawerToggleHandler}/>
                <SideDrawer toggle={this.state.openSideDrawer}/>
                {backDrop}
            </div>
        )
    }
}
