import Navbar from "../../components/Navbar";
 
const DeliveryMan = async ({ params }: any) => {
  const { id } = await params; 
 
  return (
<div>
<Navbar />
 
      <h2>Delivery Man Profile</h2>
<p>ID: {id}</p>
</div>
  );
};
 
export default DeliveryMan;