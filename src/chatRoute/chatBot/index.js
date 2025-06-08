import React, { useState } from "react";
import ChatBotService from "../chatBotService";
import Post from "../../post.js";
import EducationRoute from "../educationRoute/index.js";
import ExperienceRoute from "../experienceRoute/index.js";
import TechnologyRoute from "../technologyRoute/index.js";

const ChatBot = () => {
  const [showChat, setShowChat] = useState(false);

  const stepData = [
    {
      id: "welcome",
      message: "Hello!",
      trigger: "firstname",
    },
    {
      id: "firstname",
      user: true,
      validator: (value) => {
        if (/^[A-Z a-z]+$/.test(value)) {
          return true;
        } else {
          return "Please input alphabet characters only.";
        }
      },
      trigger: "bot",
    },
    {
      id: "bot",
      asMessage: true,
      component: <Post />,
      trigger: "qtype",
    },
    {
      id: "qtype",
      options: [
        { value: 1, label: "Education", trigger: "4" },
        { value: 2, label: "Experience", trigger: "3" },
        { value: 3, label: "Technology", trigger: "5" },
      ],
    },
    {
      id: "edutype",
      options: [
        { value: 1, label: "Completion Year", trigger: "6" },
        { value: 2, label: "Persentage", trigger: "7" },
        { value: 3, label: "College Name", trigger: "8" },
      ],
    },
    {
      id: "skillType",
      options: [
        { value: 1, label: "Technology", trigger: "9" },
        { value: 2, label: "Tech-Experience", trigger: "10" },
        { value: 3, label: "Experties", trigger: "11" },
      ],
    },
    {
      id: "techExp",
      options: [
        { value: 1, label: "Technology", trigger: "12" },
        { value: 2, label: "Tech-Experience", trigger: "13" },
        { value: 3, label: "Experties", trigger: "14" },
      ],
    },
    {
      id: "3",
      asMessage: true,
      component: <ExperienceRoute />,
      trigger: "techExp",
    },
    {
      id: "4",
      asMessage: true,
      component: <EducationRoute />,
      trigger: "qtype",
    },
    {
      id: "5",
      asMessage: true,
      component: <TechnologyRoute />,
      trigger: "skillType",
    },
    {
      id: "6",
      message: "I have completed my BTech in year of 2013.",
      trigger: "firstname",
    },
    {
      id: "7",
      message: "I got 67% in my bachlor.",
      trigger: "firstname",
    },
    {
      id: "8",
      message: "I have passed out from UDML JECRC, Jaipur, Rajasthan",
      trigger: "firstname",
    },
    {
      id: "9",
      message:
        "I have worked with multiple technologies in my carrier, like React, Redux, Angular, Node, Mongo DB and all javascript technologies.",
      trigger: "firstname",
    },
    {
      id: "10",
      message: "I got 67 persentage.",
      trigger: "firstname",
    },
    {
      id: "11",
      message: "My college name was UDML JECRC",
      trigger: "firstname",
    },
    {
      id: "12",
      message:
        "I have worked with multiple technologies in my carrier, like React, Redux, Angular, Node, Mongo DB and all javascript technologies.",
      trigger: "firstname",
    },
    {
      id: "13",
      message: "I got 67 persentage.",
      trigger: "firstname",
    },
    {
      id: "14",
      message: "My college name was UDML JECRC",
      trigger: "firstname",
    },
  ];

  const toggleChatService = (bool) => {
    setShowChat(bool);
  };

  const startChat = (response) => {
    setShowChat(true);
  };

  return (
    <>
      {!showChat && (
        <img
          src="icons/gyroscope.gif"
          onClick={() => startChat(true)}
          className="chatIcon"
        />
      )}
      {showChat && (
        <ChatBotService
          toggleChatService={toggleChatService}
          stepData={stepData}
        />
      )}
    </>
  );
};

export default ChatBot;
