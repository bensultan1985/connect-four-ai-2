import * as React from "react";
// import { useTheme } from "global";

export const Logo = () => {
  // const { theme } = useTheme();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 290 290"
      xmlSpace="preserve"
      height={"100%"}
      width={"100%"}
    >
      <path
        d="M290 145c0 27.61-22.38 50-50 50h-45v45c0 27.61-22.38 50-50 50-27.61 0-50-22.39-50-50V95h145c27.62 0 50 22.39 50 50z"
        style={
          {
            // fill: theme.logoColor1,
          }
        }
      />
      <path
        d="M195 50v145H50c-27.61 0-50-22.39-50-50s22.39-50 50-50h45V50c0-27.61 22.39-50 50-50 27.62 0 50 22.39 50 50z"
        style={
          {
            // fill: theme.logoColor0,
          }
        }
      />
    </svg>
  );
};
