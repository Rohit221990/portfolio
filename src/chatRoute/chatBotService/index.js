import React, { useEffect, useState, useRef } from "react";
import { ThemeProvider } from "styled-components";
import ChatBot from "react-simple-chatbot";
import Post from "../../post.js";
import EducationRoute from "../educationRoute";
import ExperienceRoute from "../experienceRoute";
import TechnologyRoute from "../technologyRoute";
import Customlink from "../customLink";

const ChatBotService = () => {
  const messagesEndRef = useRef(null);

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
        scrollToBottom();
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
        { value: 1, label: "Branch/Stream", trigger: "6" },
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
      message: "I have completed my BTech (computer science) in year of 2013.",
      trigger: "firstname",
    },
    {
      id: "7",
      message: "thanks",
      trigger: "firstname",
    },
    {
      id: "8",
      asMessage: true,
      message: "I have passed out from UDML JECRC, Jaipur, Rajasthan",
      trigger: "firstname",
    },
    {
      id: "9",
      asMessage: true,
      message:
        "I have worked with multiple technologies in my carrier, like React, Redux, Angular, Node, Mongo DB and all javascript technologies.",
      trigger: "firstname",
    },
    {
      id: "10",
      asMessage: true,
      message: "I got 67 persentage.",
      trigger: "firstname",
    },
    {
      id: "11",
      asMessage: true,
      component: <Customlink />,
      trigger: "firstname",
    },
    {
      id: "12",
      asMessage: true,
      message:
        "I have worked with multiple technologies in my carrier, like React, Redux, Angular, Node, Mongo DB and all javascript technologies.",
      trigger: "firstname",
    },
    {
      id: "13",
      asMessage: true,
      message: "I got 67 persentage.",
      trigger: "firstname",
    },
    {
      id: "14",
      asMessage: true,
      message: "My college name was UDML JECRC",
      trigger: "firstname",
    },
    {
      id: "end-message",
      asMessage: true,
      message: "Thanks to connect",
      end: true,
    },
  ];

  const theme = {
    background: "#f5f8fb",
    fontFamily: "Helvetica Neue",
    headerBgColor: "rgba(14, 107, 168, 0.467)",
    headerFontColor: "#fff",
    headerFontSize: "15px",
    botBubbleColor: "rgba(14, 107, 168, 0.467)",
    botFontColor: "rgb(0 0 0)",
    userBubbleColor: "#fff",
    userFontColor: "#4a4a4a",
  };

  const config = {
    width: "300px",
    height: "400px",
    hideUserAvatar: true,
    placeholder: "Type your response.",
    opened: false,
  };

  useEffect(() => {
    return () => {
      handleEnd();
    };
  }, []);

  const handleEnd = () => {
    // console.log(steps);
    // console.log(values);
    alert(`Chat handleEnd callback! Number`);
  };

  const scrollToBottom = () => {
    setTimeout(() => {
      const section = document.querySelectorAll(
        ".rsc .rsc-container .rsc-content"
      );
      if (section) {
        section[0].scrollTop = 10000;
      }
    }, 2000);
  };

  return (
    <>
      <div>
        <ThemeProvider theme={theme}>
          <div className="chatdiv" ref={messagesEndRef}>
            <ChatBot
              enableSmoothScroll={true}
              floating={true}
              floatingIcon={
                <img
                  style={{ width: "60%", opacity: 0.6, borderRadius: "50%" }}
                  src="icons/icons8-chat.gif"
                />
              }
              speechSynthesis={{ enable: true, lang: "en-US", voice: null }}
              handleEnd={handleEnd}
              recognitionEnable={false}
              steps={stepData}
              {...config}
            />
          </div>
        </ThemeProvider>
      </div>
    </>
  );
};

export default ChatBotService;
