import React, { useState, useEffect } from "react";
import { AiResponseContainer } from "./ai-response-container";
import { UserRequestContainer } from "./user-request-container";

export const AiChatModule = () => {
  const [userText, setUserText] = useState();
  const [aiResponseText, setAiResponseText] = useState();
  console.log(aiResponseText);
  useEffect(() => {}, [aiResponseText]);
  return (
    <>
      <AiResponseContainer aiResponseText={aiResponseText} />
      <UserRequestContainer
        userText={userText}
        setUserText={setUserText}
        setAiResponseText={setAiResponseText}
      />
    </>
  );
};
