import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { loginUser } from '../../../_actions/user_actions';

function LoginPage(props) {

    const dispatch = useDispatch();

    const [Email, setEmail] = useState(""); //setEmail = setState(class)
    const [Password, setPassword] = useState("");

    const onEmailHandler = (e) => {
        setEmail(e.currentTarget.value);
    }
    const onPasswordHandler = (e)=>{
        setPassword(e.currentTarget.value);
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        let body = {Email, Password};
        dispatch(loginUser(body))
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
                <label htmlFor="">Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler}/>
                <br />
                <button>Login</button>
            </form>
        </div>
    )
}

export default LoginPage