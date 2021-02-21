import React, { useState, useRef, useCallback } from 'react';
import './InfoCard.css';
import {CgMoreVerticalO } from 'react-icons/cg';
import useApiData from '../../../Hooks/useApiData.js';
import { sortData } from '../../../Helpers/helper.js'

function InfoCard(props) {
    
    const [pageNum, setPageNum] = useState(1)

    const {data, hasMore, loading} = useApiData(pageNum, props.query || 'US', props.selectedOption, props.orderAsc)

    const observer = useRef();

    const lastElement = useCallback(node => {
        if(loading) return;
        if(observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting && hasMore) {
                console.log('visible')
                setPageNum(prevPageNum => prevPageNum + 1)
            }
        })
        if(node) observer.current.observe(node)
    }, [loading, hasMore])



    return (
        <>
        {sortData(data, props.selectedOption, props.orderAsc).map((data, ind) => {
            return (
                <div className='db-card' key={ind} ref={lastElement}>
                    <h2>{data.location},</h2>
                    <h3>{data.city} {data.country}</h3>

                    <div className='ms-info-card'>
                    {data.measurements.map((measurement, ind) => {

                        return (
                            <div className='measurement' key={ind}>
                                <p>
                                <span className='ms-param'>{measurement.parameter}</span> <br/><span className='ms-value'>{measurement.value}</span> 
                                <span className='ms-unit'>{measurement.unit}</span>
                                </p>
                            </div>
                        )}
                        )}
                            <ul className='location-info'>
                                <li><CgMoreVerticalO/><a href='/details'>More</a></li>
                            </ul>    
                    </div>  
                </div>
            )
        }
        )}
        <h1 style={{display: loading ? 'block' : 'none'}}>Loading...</h1>
        </>
    )
}

export default InfoCard

