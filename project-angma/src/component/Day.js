import React, {useState, useEffect} from 'react'
//import dummy from "../db/data.json";
import {useParams} from "react-router-dom";
import Word from './Word';

function Day() {
    const {day} = useParams();
    //const wordList = dummy.words.filter(words => words.day === Number(day))
    const [words, setwords] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:3001/words?day=${day}`) //프로미스 반환
        .then(res => { //http 형식으로 받은 정보를 json으로 반환
            return res.json();
        })
        .then(data => { //json으로 받은 데이터를 useState로 세팅
            setwords(data);
        });
    }, [day]) //day배열이 변경될때만 useEffect가 실행, 빈 배열일때는 최초 렌더링때만 한번
  return (
    <>
        <h2>Day {day}</h2>
        <table>
            <tbody>
                {words.map((words) => {return(
                    <Word words={words} key={words.id}></Word>
                )})}
                
            </tbody>
        </table>
    </>
    
  )
}

export default Day