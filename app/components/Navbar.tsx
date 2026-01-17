import Link from "next/link";
 
const Navbar = () => {
  return (
<div>
<Link href="/">Home</Link> |{" "}
<Link href="/login">Login</Link> |{" "}
<Link href="/register">Register</Link> |{" "}
<Link href="/deliveryman/1">DeliveryMan</Link>
<hr />
</div>
  );
};
 
export default Navbar;