import React from "react";
import Headings from "./headings";
import Footer from "./footer";

const HomeLayout = ({ children }) => {
  return (
    <>
      <Headings />
      <Footer />
      <div style={{ minHeight: "50vh", width: "100%", padding: "1.5rem 5rem" }}>
        {children}
      </div>
    </>
  );
};
export default HomeLayout;
