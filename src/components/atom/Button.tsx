import React from "react";

type TProps = {
  className?: HTMLButtonElement["className"];
  children: React.ReactNode;
};

const Button = (props: TProps) => {
  return (
    <button className={`w-full p-2 rounded-md ${props.className}`}>
      {props.children}
    </button>
  );
};

export default Button;
