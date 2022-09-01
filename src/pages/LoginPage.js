import React from 'react'
import { useEffect } from 'react';
import  axios  from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

const LoginPage = () => {

    const { loginWithRedirect, isAuthenticated } = useAuth0()

    useEffect(()=> {
        axios
        .get("http://localhost:3001/users")
        .then((res) => 
            console.log(res.data)
        )
    }, [])

  return (
    <div>LoginPage</div>
  )
}

export default LoginPage