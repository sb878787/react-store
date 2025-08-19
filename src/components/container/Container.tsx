import React, { type ReactNode } from "react";

interface IContainer {
  children: ReactNode;
}

function Container({ children }: IContainer) {
  return <div className="container mx-auto">{children}</div>;
}

export default Container;
