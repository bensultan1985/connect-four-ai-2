import * as React from "react"
import { SVGProps } from "react"

export const FacebookIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    xmlSpace="preserve"
    height={"100%"}
    {...props}
  >
    <path
      d="M50 25C50 11.2 38.8 0 25 0S0 11.2 0 25c0 12.5 9.1 22.8 21.1 24.7V32.2h-6.3V25h6.3v-5.5c0-6.3 3.7-9.7 9.4-9.7 2.7 0 5.6.5 5.6.5v6.2H33c-3.1 0-4.1 1.9-4.1 3.9V25h6.9l-1.1 7.2h-5.8v17.5C40.9 47.8 50 37.5 50 25z"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: "#1977f3",
      }}
    />
    <path
      d="m34.7 32.2 1.1-7.2h-6.9v-4.7c0-2 1-3.9 4.1-3.9h3.2v-6.2s-2.9-.5-5.6-.5c-5.7 0-9.4 3.5-9.4 9.7V25h-6.3v7.2h6.3v17.5c1.3.2 2.6.3 3.9.3s2.6-.1 3.9-.3V32.2h5.7z"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: "#fefefe",
      }}
    />
  </svg>
)