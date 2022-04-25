import React from 'react'
import useFetch from '../hooks/useFetch'
import {useHistory} from 'react-router-dom';

function CreateDay() {
    const days = useFetch('http://localhost:3001/days');
    const history = useHistory();
    function dayAdd(){
        console.log(days)
        fetch('http://localhost:3001/days/', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json' //보내는 리소스의 타입
            },
            body: JSON.stringify({
                day: days.length + 1
            })
        }).then(res => {
                if(res.ok){
                    alert('생성완료');
                    history.push(`/day/${days.length + 1}`)
            }
        })
        
    }
    return (
        <div>
            <h3>현재 일수 : {days.length}일</h3>
            <button onClick={dayAdd}>Day 추가</button>
        </div>
    )
}

export default CreateDay