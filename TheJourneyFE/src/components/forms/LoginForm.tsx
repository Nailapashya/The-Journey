import { Box, Input, Button } from '@mui/material'
import React, { useState } from 'react'
import axios from "axios"

const LoginForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      const response = await axios.post("http://localhost:3001/login", {
        email, password
      })

      setSuccessMessage("Registration successful!");
      setError(null);
      console.log("Registration response:", response.data);

    } catch(error) {
      setSuccessMessage(null);
      console.error("Login error:", error);
    }
    }


  return (

    <Box component="form" onSubmit={handleSubmit}>
      <Input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
      <Input type="password" value={password} onChange={e => setPassword(e.target.value)} required />

      <Button type="submit">Login</Button>
    </Box>

  )
}

export default LoginForm