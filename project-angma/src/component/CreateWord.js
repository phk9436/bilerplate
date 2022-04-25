import React, {useRef, useState} from 'react'
import useFetch from '../hooks/useFetch'
import {useHistory} from 'react-router-dom';

function CreateWord() {
    const days = useFetch('http://localhost:3001/days');
    const history = useHistory();
    const [isLoading, setisLoading] = useState(false)
    function onsubmit(e){
        e.preventDefault();

        if(!isLoading){
            setisLoading(true);
            fetch('http://localhost:3001/words/', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json' //보내는 리소스의 타입
                },
                body: JSON.stringify({
                    day : Number(dayRef.current.value),
                    eng : engRef.current.value,
                    kor : korRef.current.value,
                    isDone : false
                })
            }).then(res => {
                if(res.ok){
                    alert('생성완료');
                    history.push(`/day/${dayRef.current.value}`);
                    setisLoading(false);
                }
            })
            
        }
    }

    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);

    return (
        <form action="" onSubmit={onsubmit}>
            <div className="input_area">
                <label htmlFor="">Eng</label>
                <input type="text" placeholder='computer' ref={engRef}/>
            </div>
            <div className="input_area">
                <label htmlFor="">Kor</label>
                <input type="text" placeholder='컴퓨터' ref={korRef}/>
            </div>
            <div className="input_area">
                <label htmlFor="">Day</label>
                <select name="" id="" ref={dayRef}>
                    {days.map(day => {
                        return(
                            <option key={day.id} value={day.day} >{day.day}</option>
                        )
                    })}
                </select>
            </div>
            <button
                style={{opacity: isLoading ? 0.3 : 1}}
            >{isLoading?"Saving...":'저장'}</button>
        </form>
    )
}

export default CreateWord