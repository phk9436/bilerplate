import { useState } from "react";
import UserName from "./UserName";

export default function Hello(props){
    const [Name, setName] = useState("Mike");
    const [Age, setAge] = useState(props.age);
    const msg = Age > 19 ? '성인' : '미성년자';
    function changeName(){
        setName(Name === "Mike"? "Jane": "Mike");
        setAge(Name === "Mike"? Age + 10 : Math.floor(Age / 2));
    }

    return (
    <div>
        {/*<h1>Hello</h1>
        <button onClick={showName}>Show Name</button>
        <button onClick={()=>showAge(10)}>Show age</button>
        <input type="text" onChange={showVal}/>*/}
        <h2>{Name}({Age}) : {msg}</h2>
        <UserName name = {Name}></UserName>
        <button onClick={changeName}>Change</button>
    </div>
    )
}