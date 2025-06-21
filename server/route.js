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
      "I possess strong proficiency in modern JavaScript technologies, including React, Redux, Angular, and Node.js, along with extensive experience working with a variety of supporting libraries and frameworks to develop scalable and maintainable web applications."
    );
    manager.addAnswer(
      "en",
      "skills",
      "I am proficient in React, Redux, Angular, Node.js, and other modern JavaScript libraries and frameworks, with a strong focus on building scalable, high-performance web applications.I am skilled in React, Redux, Angular, Node and Other javascript libraries."
    );
    manager.addAnswer(
      "en",
      "skills",
      "I have strong expertise in front-end and full-stack development, with hands-on experience in technologies such as React, Redux, Angular, Node.js, and various modern JavaScript libraries and frameworks."
    );

    //Add Answers education

    manager.addAnswer(
      "en",
      "education",
      "I am a Staff Engineer at Radisys, where I lead the design, development, and delivery of robust IT systems and software solutions. With a strong focus on system architecture and technical leadership, I drive innovation and efficiency across projects. I hold a B.Tech in Computer Science from JECRC UDML College of Engineering, where I built a solid foundation in programming, networking, and core engineering principles. My academic background, combined with hands-on experience, has equipped me with strong problem-solving and project management skills that I apply consistently in high-impact, real-world environments."
    );
    manager.addAnswer(
      "en",
      "education",
      "My education equipped me not only with strong technical skills but also sharpened my problem-solving and project management abilities—skills I consistently apply in my day-to-day work."
    );
    //Add Answers experience

    manager.addAnswer(
      "en",
      "experience",
      "I am currently working as a Staff Engineer at Radisys, where I lead and manage diverse IT systems and solutions. My primary focus lies in software development, system architecture, and technical leadership, ensuring the delivery of scalable and high-performing technology solutions."
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
