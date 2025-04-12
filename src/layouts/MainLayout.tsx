import { Outlet } from "react-router";

import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

const MainLayout = () => {
  return (
    <div className="min-h-svh flex flex-col items-stretch justify-between">
      <Navbar />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout