import React, {useState} from 'react'

function Word({words}) {
    const [word, setword] = useState(words)
    const [isShow, setisShow] = useState(false);
    const [isDone, setIsDone] = useState(words.isDone);
    function ToggleShow(){
        return setisShow(!isShow)
    }
    function ToggleDone(){
        //return setIsDone(!isDone)
        fetch(`http://localhost:3001/words/${words.id}`, {
            method: 'PUT', //데이터 수정
            headers: {
                'Content-Type' : 'application/json' //보내는 리소스의 타입
            },
            body : JSON.stringify({
                ...words,
                isDone : !isDone
            })
        }).then(res => {
            if(res.ok) setIsDone(!isDone)
        });
    }

    function Del(){
        if(window.confirm("정말 삭제하겠습니까?")){
            fetch(`http://localhost:3001/words/${words.id}`, {
                method : 'DELETE'
            }).then(res => {
                if(res.ok) setword({id:0});
            })
        }
    }

    if(word.id === 0) return false;

    return (
    <tr className={isDone ? 'off' : ''}>
        <td> <input type="checkbox" checked={isDone} onChange={ToggleDone}/></td>
        <td> {words.eng} </td>
        <td> {isShow && words.kor} </td>
        <td>
            <button onClick={ToggleShow}>뜻 {isShow ? '숨기기' : "보이기"}</button>
            <button className='btn_del' onClick={Del}>삭제</button>
        </td>
    </tr>
  )
}

export default Word