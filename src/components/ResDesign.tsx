import React from "react";

export default function ResponsiveDesign() {
  return (
    <div className="fixed bottom-5 left-5 flex items-center z-50 text-black w-fit h-fit p-2 bg-gray-200 rounded-md border-b-2 border-black shadow-md">
      <p>Responsive Design=</p>
      <span className="font-bold block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden">
        default
      </span>
      <span className="font-bold hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden">
        sm
      </span>
      <span className="font-bold hidden sm:hidden md:block lg:hidden xl:hidden 2xl:hidden">
        md
      </span>
      <span className="font-bold hidden sm:hidden md:hidden lg:block xl:hidden 2xl:hidden">
        lg
      </span>
      <span className="font-bold hidden sm:hidden md:hidden lg:hidden xl:block 2xl:hidden">
        xl
      </span>
      <span className="font-bold hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:block">
        xl 2
      </span>
    </div>
  );
}
