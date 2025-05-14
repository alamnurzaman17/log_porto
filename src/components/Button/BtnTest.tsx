import React from "react";
import "./BtnTest.css";

interface BtnTestProps {
  componentStyle: string;
  children: React.ReactNode;
  onClick: () => void;
}

export default function BtnTest({
  componentStyle,
  children,
  onClick,
}: BtnTestProps): JSX.Element {
  return (
    <>
      {/* defaul style = font-satoshi font-medium py-2 px-6 border border-black bg-white cursor-pointer*/}
      <button
        onClick={onClick}
        className={`custom-btn btn-11 ${componentStyle}`}
      >
        <span>{children}</span>
      </button>
    </>
  );
}
