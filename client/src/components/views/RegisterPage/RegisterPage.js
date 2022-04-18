import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { registerUser } from '../../../_actions/user_actions';

function RegisterPage(props) {
    const dispatch = useDispatch();

    const [Email, setEmail] = useState(""); //setEmail = setState(class)
    const [Name, setName] = useState("");
    const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");

    const onEmailHandler = (e) => {
        setEmail(e.currentTarget.value);
    }
    const onNameHandler = (e)=>{
        setName(e.currentTarget.value);
    }
    const onPasswordHandler = (e)=>{
        setPassword(e.currentTarget.value);
    }
    const onConfirmPasswordHandler = (e)=>{
        setConfirmPassword(e.currentTarget.value);
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        if(Password !== ConfirmPassword){
            return alert('dismatched!');
        }
        let body = {Email, Name, Password, ConfirmPassword};
        dispatch(registerUser(body))
        .then(response => {
            response.payload.success?
            (props.history.push('/')):
            alert('error');
        });
        
    }
    return (
        <div style={{
            display:'flex', justifyContent: 'center', alignItems: 'center', 
            width: '100%', height: '100vh'
        }}>
            <form action="" style={{display : 'flex', flexDirection : 'column'}}
                onSubmit={onSubmitHandler}
            >
                <label htmlFor="">Email</label>
                <input type="email" value={Email} onChange={onEmailHandler}/>
                <label htmlFor="">Name</label>
                <input type="text" value={Name} onChange={onNameHandler}/>
                <label htmlFor="">Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler}/>
                <label htmlFor="">Confirm Password</label>
                <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler}/>
                <br />
                <button>Register</button>
            </form>
        </div>
    )
}

export default RegisterPage