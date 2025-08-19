import React, { type ReactNode } from "react";
import Navbar from "../navbar/Navbar";

interface ILayout {
  children: ReactNode;
}

function Layout({ children }: ILayout) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default Layout;
