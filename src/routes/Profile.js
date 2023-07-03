import React from 'react'
import { useNavigate } from 'react-router-dom'


const Profile = () => {
    const navigate = useNavigate();
    // const onlogout = ()=>{
    //     localStorage.removeItem('token')
    //     navigate('/')
    // }
  return (
    <div>
        <h1 className='container' style={{margin:'10%'}}>Profile</h1>
        {/* <button onClick={onlogout} style={{margin:'5%'}}>Logout</button> */}
    </div>
  )
}

export default Profile