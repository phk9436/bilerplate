import React, {useEffect, useState} from 'react'

function useFetch(url) {
    const [data, setdata] = useState([])
    useEffect(()=>{
        fetch(url) //프로미스 반환
        .then(res => { //http 형식으로 받은 정보를 json으로 반환
            return res.json();
        })
        .then(data => { //json으로 받은 데이터를 useState로 세팅
            setdata(data);
        });
    }, [url]) //day배열이 변경될때만 useEffect가 실행, 빈 배열일때는 최초 렌더링때만 한번

    return data;
}

export default useFetch