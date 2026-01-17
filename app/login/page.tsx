"use client";
 
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
 
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
 
  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/login",
        {
          username: username,
          password: password,
        }
      );
 
      // save access token
      localStorage.setItem("access_token", response.data.access_token);
 
      // redirect to dashboard
      router.push("/dashboard");
    } catch (err: any) {
      setError("Invalid username or password");
    }
  };
 
  return (
<div>
<Navbar />
<h2>Login</h2>
 
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
<br />
 
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
<br />
 
      <button onClick={handleLogin}>Login</button>
 
      {error && <p>{error}</p>}
</div>
  );
};
 
export default Login;