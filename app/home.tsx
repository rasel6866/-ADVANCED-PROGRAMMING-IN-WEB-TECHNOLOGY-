import Navbar from "./components/Navbar";
import Link from "next/link";
 
const Home = () => {
  return (
<div>
<Navbar />
 
      <h1>Delivery Management System</h1>
 
      <Link href="/login">Login</Link>
<br />
<Link href="/register">Register</Link>
</div>
  );
};
 
export default Home;