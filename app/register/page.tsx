"use client";
 
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
 
const Register = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
 
  const handleRegister = async () => {
    try {
      await axios.post(
        "http://localhost:3000/deliveryman/register",
        {
          name: name,
          password: password,
          phone: phone,
        }
      );
 
      // success → login page
      router.push("/login");
    } catch (err: any) {
      if (err.response && err.response.data) {
        setError(err.response.data.message);
      } else {
        setError("Registration failed");
      }
    }
  };
 
  return (
<div>
<Navbar />
<h2>Register Deliveryman</h2>
 
      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
<br />
 
      <input
        type="text"
        placeholder="Phone (01XXXXXXXXX)"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
<br />
 
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
<br />
 
      <button onClick={handleRegister}>Register</button>
 
      {error && <p>{error}</p>}
</div>
  );
};
 
export default Register;