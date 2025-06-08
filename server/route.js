const express = require("express");
const { NlpManager } = require("node-nlp");
const manager = new NlpManager({ languages: ["en"] });

class Route {
  constructor(app, serverConfig) {
    this.app = app;
    this.serverConfig = serverConfig;
  }

  routeConfig() {
    this.appRoutes();
    this.nlpSetup();
  }

  appRoutes() {
    this.app.use(express.urlencoded({ extended: true }));

    this.app.get("/", (req, res) => {
      res.render("index");
    });

    this.app.get(`${this.serverConfig.preRoute}check`, (req, res) => {
      res.send({ code: 200, message: "routing is working" });
    });
  }

  nlpSetup() {
    // add Documents greeting
    manager.addDocument("en", "hello", "greeting");
    manager.addDocument("en", "hi", "greeting");
    manager.addDocument("en", "how you", "greeting");
    manager.addDocument("en", "hey", "greeting");
    manager.addDocument("en", "good morning", "greeting");
    manager.addDocument("en", "good afternoon", "greeting");
    manager.addDocument("en", "good day", "greeting");

    // add Documents personal
    manager.addDocument("en", "name", "personal");
    manager.addDocument("en", "what is your name", "personal");
    manager.addDocument("en", "your name is", "personal");
    manager.addDocument("en", "what about you name", "personal");
    manager.addDocument("en", "who are you", "personal");
    manager.addDocument("en", "I can call you with", "personal");
    manager.addDocument("en", "you are", "personal");

    // add Documents education
    manager.addDocument("en", "what is your education?", "education");
    manager.addDocument("en", "what is your education", "education");
    manager.addDocument("en", "education", "education");
    manager.addDocument("en", "may I know about your education", "education");
    manager.addDocument("en", "your study", "education");
    manager.addDocument("en", "study", "education");
    manager.addDocument("en", "what you did", "education");

    // add Documents skills
    manager.addDocument("en", "what is your skills?", "skills");
    manager.addDocument("en", "what is your experties", "skills");
    manager.addDocument("en", "what do you know", "skills");
    manager.addDocument("en", "your tech", "skills");
    manager.addDocument("en", "your technology", "skills");
    manager.addDocument("en", "what tech you are hands on", "skills");
    manager.addDocument("en", "techno", "skills");
    manager.addDocument("en", "what is your tech?", "skills");
    manager.addDocument("en", "on what tech you worked on", "skills");
    manager.addDocument("en", "tell me about your skills", "skills");
    manager.addDocument("en", "tell me about your technology", "skills");
    manager.addDocument("en", "you worked on which technology", "skills");
    manager.addDocument("en", "on what tech you worked on", "skills");
    manager.addDocument("en", "hands on tech", "skills");

    // add Documents experience
    manager.addDocument("en", "what is your experience?", "experience");
    manager.addDocument("en", "what is your domain experience", "experience");
    manager.addDocument("en", "Where you worked", "experience");
    manager.addDocument("en", "tell me about you", "experience");
    manager.addDocument("en", "your domain experience", "experience");
    manager.addDocument("en", "domain experience", "experience");
    manager.addDocument("en", "experience", "experience");
    manager.addDocument("en", "exp", "experience");
    manager.addDocument("en", "what all companies you worked", "experience");
    manager.addDocument("en", "company experience", "experience");
    manager.addDocument("en", "domain", "experience");
    manager.addDocument("en", "tell me your domain", "experience");
    manager.addDocument("en", "industry experience", "experience");
    manager.addDocument("en", "tech company experience", "experience");

    //Add Answers greeting
    manager.addAnswer("en", "greeting", "Hi!");
    manager.addAnswer("en", "greeting", "Hey there!");
    manager.addAnswer("en", "greeting", "Hello!");
    manager.addAnswer("en", "greeting", "Hi, Watsup!");

    //Add Answers personal
    manager.addAnswer("en", "personal", "My name is Rohit Jangid!");
    manager.addAnswer("en", "personal", "Rohit Jangid");
    manager.addAnswer("en", "personal", "I am Rohit Jangid");
    manager.addAnswer("en", "personal", "This is Rohit Jangid!");
    manager.addAnswer("en", "personal", "Rohit here");

    //Add Answers skills
    manager.addAnswer(
      "en",
      "skills",
      "I have experience with a variety of software and systems, including React, Redux, Node, Angular, Mongo Db and all other javascript libraries. I’m also expanding my expertise in Python and ML & AI using javascript."
    );
    manager.addAnswer(
      "en",
      "skills",
      "I am skilled in React, Redux, Angular, Node and Other javascript libraries."
    );
    manager.addAnswer(
      "en",
      "skills",
      "I am skilled in React, Redux, Angular, Node and Other javascript libraries."
    );

    //Add Answers education

    manager.addAnswer(
      "en",
      "education",
      "I hold a B. Tech in Computer Science from Jecrc-UDML college of engineering, where I develop a strong foundation in programming and networking. "
    );
    manager.addAnswer(
      "en",
      "education",
      "My education not only provided me technical skills, but also honed my problem-solving and project management abilities, which I apply daily in my work."
    );
    //Add Answers experience

    manager.addAnswer(
      "en",
      "experience",
      "I  am currently working as a Staff Engineer at Radisys, where I manage a variety of IT systems and solutions, focusing on software development, system design and Tech lead area."
    );

    manager.train().then(async () => {
      manager.save();
      this.app.get(`${this.serverConfig.preRoute}chat`, async (req, res) => {
        let response = await manager.process("en", req.query.message);
        res.send({ message: response.answer });
      });
    });
  }
}

module.exports = Route;
