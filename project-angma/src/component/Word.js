import React, {useState} from 'react'

function Word({words}) {
    const [isShow, setisShow] = useState(false);
    const [isDone, setIsDone] = useState(words.isDone);
    function ToggleShow(){
        return setisShow(!isShow)
    }
    function ToggleDone(){
        return setIsDone(!isDone)
    }

  return (
    <tr className={isDone ? 'off' : ''}>
        <td> <input type="checkbox" checked={isDone} onChange={ToggleDone}/></td>
        <td> {words.eng} </td>
        <td> {isShow && words.kor} </td>
        <td>
            <button onClick={ToggleShow}>뜻 {isShow ? '숨기기' : "보이기"}</button>
            <button className='btn_del'>삭제</button>
        </td>
    </tr>
  )
}

export default Word