/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";

import "./LayOut.css";

import Footer from "../Footer/Footer";
import { useState, useEffect } from "react";

export const LayOut = ({ children }) => {
  const [user, setUser] = useState(false);

  useEffect(() => {
    function onEffect() {
      const json = localStorage.getItem("user");
      const u = JSON.parse(json);
      setUser(u);
    }
    onEffect();
  }, []);

  return (
    <>
      <div className="layout-components">
        {children}
       
        <div className="content">
          <Outlet />
        </div>
        {!user ?? <Footer />}
      </div>
    </>
  );
};
