import React from 'react';
import dummy from "../db/data.json";

function DayList() {

  return (
    <ul className='list_day'>
        {dummy.days.map((days) => {
            return (
                <li key={days.id} onClick={()=> console.log(days.id)}>
                    Day {days.day}
                </li>
            )
        })}
    </ul>
  )
}

export default DayList