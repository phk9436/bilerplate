import React, {useState} from 'react'
import dummy from "../db/data.json";
import {useParams} from "react-router-dom"

function Day() {
    const {day} = useParams();
    console.log(day);
    const wordList = dummy.words.filter(words => words.day === Number(day))
  return (
    <>
        <h2>Day {day}</h2>
        <table>
            <tbody>
                {wordList.map((words) => {
                    return (
                        <tr key={words.id}>
                            <td>
                                {words.eng}
                            </td>
                            <td>
                                {words.kor}
                            </td>
                        </tr>
                    )
                })}
                
            </tbody>
        </table>
    </>
    
  )
}

export default Day