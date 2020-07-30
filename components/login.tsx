import React, { useEffect } from 'react'

const Login = ({login}) => {

  useEffect(() => {
    login({
      username: 'yoga',
      password: 'password'
    })
  }, []);

  return (
    <div></div>
  )
}

export default Login