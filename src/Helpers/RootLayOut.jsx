import { Footer } from "../Components/Footer";
import { Navbar } from "../Components/Navbar";
import { Outlet } from "react-router-dom";

export const RootLayOut = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
