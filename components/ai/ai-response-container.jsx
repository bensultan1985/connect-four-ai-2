import React, { useEffect } from "react";

export const AiResponseContainer = ({ aiResponseText }) => {
  return (
    <>
      <div
        style={{
          border: "solid",
          borderColor: "blue",
          minWidth: "300px",
          minHeight: "200px",
          marginBottom: "20px",
          background: "white",
          borderRadius: "12px",
          color: "black",
        }}
      >
        <span style={{ color: "black" }}>{aiResponseText}</span>
      </div>
    </>
  );
};
