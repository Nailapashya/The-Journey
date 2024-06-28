import React from "react"
import LoginForm from "../forms/LoginForm"
import {Box} from "@mui/material"

const LoginPages: React.FC = () => {
  return (
    <Box>
      <h2>Login</h2>
      <LoginForm/>
    </Box>
  )
}

export default LoginPages