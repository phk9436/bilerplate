import { useState } from "react";


export default function Hello(){
    const [Name, setName] = useState("Mike")
    function changeName(){
        setName(Name === "Mike"? "Jane": "Mike");
    }

    function showName(){
        console.log(Name)
    }
    function showAge(age){
        console.log(age)
    }
    function showVal(e){
        console.log(e.target.value)
    }

    return (
    <div>
        {/*<h1>Hello</h1>
        <button onClick={showName}>Show Name</button>
        <button onClick={()=>showAge(10)}>Show age</button>
        <input type="text" onChange={showVal}/>*/}
        <h2>{Name}</h2>
        <button onClick={changeName}>Change</button>
    </div>
    )
}