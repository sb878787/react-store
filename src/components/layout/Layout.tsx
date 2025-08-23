// React Import
import { type ReactNode } from "react";

// Components Import
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
