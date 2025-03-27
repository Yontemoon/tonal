import React from "react";

type PropTypes = {
  children: React.ReactNode;
};

const Button = ({ children }: PropTypes) => {
  return <div>{children}</div>;
};

export default Button;
