import { Outlet } from "react-router-dom";
import TheNavbar from "../Components/TheNavbar";
const MainLayout = () => {
  return (
    <div>
      <TheNavbar/>
      <Outlet/>
    </div>
  )
}

export default MainLayout