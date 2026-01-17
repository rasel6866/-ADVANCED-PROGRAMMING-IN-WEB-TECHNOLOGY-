"use client";
 
import Navbar from "../components/Navbar";
 
const Dashboard = () => {
  const token =
    typeof window !== "undefined"
      ? localStorage.getItem("access_token")
      : null;
 
  return (
<div>
<Navbar />
<h2>Dashboard</h2>
 
      {token ? (
<p>Login Successful. Token Stored.</p>
      ) : (
<p>Please login first.</p>
      )}
</div>
  );
};
 
export default Dashboard;