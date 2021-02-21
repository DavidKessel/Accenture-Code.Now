import React from 'react';
import {MdArrowDropDown} from 'react-icons/md';
import './SelectBtn.css';


function SelectBtn(props) {

    const options = ['country','location', 'city']

    return (
        <div className='select-container'>
            <div className='select-item' onClick={props.toggleSelect}>
               <div> <p>{props.selectedOption || options[0]} </p></div>
               <div><i><MdArrowDropDown /></i></div>
            </div>
            {props.isOpen &&
            <div className='select-list' onMouseLeave={props.toggleSelect}>
                <ul>
                {options.map((element, ind) => {
                    return(
                    <li key={ind} onClick={()=> props.handleSelectedOption(element)}>{element}</li>
                    )
                })}
                </ul>
            </div>
            }
        </div>
    )
}

export default SelectBtn

