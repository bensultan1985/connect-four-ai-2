import React, { useState } from "react";
import { CFormInput, CButton } from "@coreui/react";
import { genAiComm } from "../services/gen-ai-comm";

export const UserRequestContainer = ({
  userText,
  setUserText,
  setAiResponseText,
}) => {
  const getGenAiResponse = async () => {
    const response = await genAiComm(userText);
    setAiResponseText(response);
  };
  return (
    <>
      <CFormInput
        style={{ fontSize: "18px" }}
        id="user-text"
        onChange={(e) => {
          e.preventDefault();
          setUserText(e.target.value);
        }}
      />
      <CButton
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          getGenAiResponse(userText);
        }}
      >
        Send
      </CButton>
    </>
  );
};
