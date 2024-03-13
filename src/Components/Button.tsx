import * as React from "react";
import { ReactNode } from "react";

type PropsType = {
  children: ReactNode;
  onClick?: () => void;
};

const Button = ({ children, onClick }: PropsType) => {
  return (
    <button
    onClick={onClick}
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "10px 20px",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
};

export { Button };
