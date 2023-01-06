import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux"; 
import { Navbar } from "../components/Navbar";

export const Dashboard = () => {

  const navigate = useNavigate();
  const {user} = useSelector((state) => state.auth);

  useEffect(() => {
    if(!user){
      navigate('/login');
    }
  }, [user, navigate])
  

  return (
    <div>
      <Navbar />
      <h1>Dashboard</h1>
    </div>
  )
}
