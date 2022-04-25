import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom"
import useFetch from '../hooks/useFetch';

function DayList() {
    const days = useFetch("http://localhost:3001/days");
    if(days.length === 0) {return <p>Loading...</p>}
  return (
      <>
        <ul className='list_day'>
            {days.map((days) => {
                return (
                    <li key={days.id}>
                        <Link to={`/day/${days.day}`}> Day {days.day}</Link>
                    </li>
                )
            })}
        </ul>
      </>
    
  )
}

export default DayList