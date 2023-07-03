
import React from 'react'
import './SignupStyles.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const navigate = useNavigate();

    const [data, setData] = React.useState({
      username:'kminchelle',
      Password:'0lelplR',
    });

    const onChangeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const onClickHandler = () => {
        console.log(data)

        fetch("https://dummyjson.com/auth/login",{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(data),
        })
        .then((res)=>res.json())
        .then((data)=>{
            localStorage.setItem("token",data.token)
            navigate("/profile")
        })

    }

    return (

        <div className='container'>
            <h1>Sign in</h1>
            <div className='form'>
                <input
                    type='text'
                    name='username'
                    placeholder='Username'
                    value={data.username}
                    onChange={onChangeHandler}
                />
                <br/>
                <input
                    type='Password'
                    name='Password'
                    placeholder='Password'
                    value={data.Password}
                    onChange={onChangeHandler}
                />
                <br/>
                <button onClick={onClickHandler}>Sign in</button>
            </div>
        </div>

    )
}

export default Signup

