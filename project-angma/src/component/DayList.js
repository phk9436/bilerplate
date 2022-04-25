import React, {useState, useEffect} from 'react';
//import dummy from "../db/data.json";
import {Link} from "react-router-dom"

function DayList() {
    const [days, setdays] = useState([]);

    /*function onClick(){
        setdays([
            ...days,
            {
                id: Math.random(),
                day: 1
            }
        ])
        console.log(days);
    }*/
    useEffect(()=>{
        fetch("http://localhost:3001/days") //프로미스 반환
        .then(res => { //http 형식으로 받은 정보를 json으로 반환
            return res.json();
        })
        .then(data => { //json으로 받은 데이터를 useState로 세팅
            setdays(data);
        });
    }, []) //day배열이 변경될때만 useEffect가 실행, 빈 배열일때는 최초 렌더링때만 한번
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