import * as React from "react"
import { SVGProps } from "react"

export const GoogleIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        xmlSpace="preserve"
        {...props}
        height={"100%"}
    >
        <path
            d="M49.5 25.6c0-1.6-.1-3.2-.4-4.7H25.5v9.4H39c-.6 3.1-2.4 5.7-5 7.5V44h8c4.8-4.4 7.5-10.8 7.5-18.4z"
            style={{
                fill: "#4285f4",
            }}
        />
        <path
            d="M25.5 50c6.8 0 12.4-2.2 16.5-6.1l-8-6.2c-2.2 1.5-5.1 2.4-8.5 2.4-6.5 0-12-4.4-14-10.3H3.2v6.4C7.3 44.4 15.8 50 25.5 50z"
            style={{
                fill: "#34a853",
            }}
        />
        <path
            d="M11.5 29.8c-.5-1.5-.8-3.1-.8-4.8s.3-3.3.8-4.8v-6.4H3.2c-3.6 7-3.6 15.4 0 22.4l8.3-6.4z"
            style={{
                fill: "#fbbc05",
            }}
        />
        <path
            d="M25.5 9.9c3.7 0 7 1.3 9.6 3.8l7.1-7.1c-4.3-4-10-6.5-16.7-6.5C15.8 0 7.3 5.6 3.2 13.8l8.3 6.4c2-5.9 7.5-10.3 14-10.3z"
            style={{
                fill: "#ea4335",
            }}
        />
    </svg>
)