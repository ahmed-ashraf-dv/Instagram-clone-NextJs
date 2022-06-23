import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = ({ children, className = "" }) => {
  return (
    <>
      <Navbar />
      <main
        style={{ minHeight: "calc(100vh - 210px)" }}
        className={`${className}`}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
