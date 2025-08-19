import React, { type ComponentProps } from "react";

type TButton = ComponentProps<"button">

function Button({ children, ...rest }: TButton) {
  return <button {...rest} >{children}</button>;
}

export default Button;
