import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
  const [auth, setAuth] = React.useState(localStorage.getItem("token"));
    
  return (
    <div>
        {
            auth ? children : <Navigate to='/signin'/>
        }
    </div>
  )
}

export default ProtectedRoute