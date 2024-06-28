import React, { useState } from "react";
import { Box, Input, Button } from "@mui/material";
import axios from "axios"; // Import axios untuk melakukan HTTP request

const RegisterForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState<string | null>(null); 
  const [successMessage, setSuccessMessage] = useState<string | null>(null); 

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/register", {
        username,
        fullname,
        email,
        password,
        phone,
      });

      setSuccessMessage("Registration successful!");
      setError(null);
      console.log("Registration response:", response.data);
    } catch (error) {
      setSuccessMessage(null);
      console.error("Registration error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box>
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="Fullname"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          required
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <Button type="submit">Register</Button>
      </Box>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
    </form>
  );
};

export default RegisterForm;
