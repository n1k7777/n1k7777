import React from "react";

const sizeClasses = {
  txtRobotoRomanBold24: "font-bold font-roboto",
  txtRobotoItalic18: "font-normal font-roboto italic",
  txtLibreFranklinRomanRegular24: "font-librefranklin font-normal",
  txtRobotoBlackItalic24: "font-black font-roboto italic",
  txtRobotoItalicBlack32: "font-black font-roboto italic",
  txtLibreFranklinRomanRegular18: "font-librefranklin font-normal",
  txtRobotoItalicBlack48: "font-black font-roboto italic",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
