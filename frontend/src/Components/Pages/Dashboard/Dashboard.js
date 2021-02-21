import React, { useState } from 'react';
import { FcAlphabeticalSortingAz } from 'react-icons/fc';
import './Dashboard.css';
import Switch from 'react-switch'
import InfoCard from './InfoCard/InfoCard';
import SelectBtn from './DashNavigation/SelectBtn';






function Dashboard() {


    //state for select button
    const [selectedOption, setSelectedOption] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [orderAsc, setOrderAsc] = useState(true)
    //state for search bar
    const [query, setQuery] = useState('')

    const handleSelectedOption = value => {
        setSelectedOption(value);
        setIsOpen(false);
    }

    const toggleSelect = () => {
        setIsOpen(!isOpen)
    }

    return (
        <section className='db-section'>
            <div className='db-btn-nav'>
                <div className='search-area'>
                    <input type='text' className='search' placeholder='US' onChange={e => setQuery(e.target.value)}/>
                </div>
                <div className='db-nav-container'>
                    <label>Sort:</label>
                    <SelectBtn
                    handleSelectedOption={handleSelectedOption}
                    selectedOption={selectedOption}
                    isOpen={isOpen}
                    toggleSelect={toggleSelect}
                    />
                    
                <div>
                    <Switch 
                    checked={orderAsc}
                    onChange={() => {setOrderAsc(!orderAsc)}}
                    onColor="#86d3ff"
                    onHandleColor="#2693e6"
                    handleDiameter={30}
                    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                    activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                    height={30}
                    width={60}
                    />
                </div>
                <i><FcAlphabeticalSortingAz /></i>
                </div>
            </div>

            <div className='db-card-wrapper'>
                <InfoCard
                query={query}
                selectedOption={selectedOption}
                orderAsc={orderAsc}/>
            </div>
            
        </section>
    )
}

export default Dashboard

