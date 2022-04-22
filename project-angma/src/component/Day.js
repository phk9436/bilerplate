import React from 'react'
import dummy from "../db/data.json";

function Day() {
    const day = 1;
    const wordList = dummy.words.filter(words => {
        return words.day === day
    })
  return (
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
  )
}

export default Day