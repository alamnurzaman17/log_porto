import React from "react";
import "./BtnPrimary.css";

interface BtnPrimaryProps {
  componentStyle: string;
  children: React.ReactNode;
  onClick: () => void;
}

export default function BtnPrimary({
  componentStyle,
  children,
  onClick,
}: BtnPrimaryProps): JSX.Element {
  return (
    <>
      {/* defaul style = bg-white hover:bg-black hover:text-white font-satoshi font-bold py-2 px-6 border border-black bg-white cursor-pointer*/}
      <button
        onClick={onClick}
        className={`custom-btn btn-11 ${componentStyle}`}
      >
        <span>{children}</span>
      </button>
    </>
  );
}
