import React, {useState} from 'react';
import dummy from "../db/data.json";
import {Link} from "react-router-dom"

function DayList() {
    const [day, setday] = useState(1);
  return (
    <ul className='list_day'>
        {dummy.days.map((days) => {
            return (
                <li key={days.id} day={day} onClick={() => setday(days.id)}>
                    <Link to={`/day/${days.day}`}> Day {days.day}</Link>
                </li>
            )
        })}
    </ul>
  )
}

export default DayList