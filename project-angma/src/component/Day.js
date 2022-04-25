import React from 'react'
import {useParams} from "react-router-dom";
import Word from './Word';
import useFetch from '../hooks/useFetch';

function Day() {
    const {day} = useParams();
    const words = useFetch(`http://localhost:3001/words?day=${day}`)
    console.log(words)
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