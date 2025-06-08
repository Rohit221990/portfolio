var http = require("http");
var https = require("https");
var path = require("path");
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
const serverConfig = require("./serverConfig.json");
var nodeArgs = require("minimist")(process.argv.slice(2));
const nodeToRoute = Object.values(nodeArgs)[0];
const Route = require("./server/route.js");
let responseObj = {};
nodeToRoute.length > 0 &&
  nodeToRoute.forEach((element) => {
    let modifiedEle = element.split(":");
    responseObj[modifiedEle[0]] = modifiedEle[1];
  });

const fs = require("fs");
const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.use((req, res, next) => {
  console.log("Time:", Date.now());
  next();
});

class Server {
  constructor() {
    this.app = express();
    this.app.use(cors());
    this.app.use(bodyParser.json());

    this.httpServer = http.createServer(this.app);
    this.httpsServer = https.createServer(this.app);
  }

  appConfig() {
    this.app.use(
      serverConfig.preRoute,
      express.static(path.join(__dirname, "build"))
    );

    this.app.get(`${serverConfig.preRoute}`, (req, res) => {
      res.sendFile(path.join(__dirname, "app/build", "index.html"));
    });

    this.app.get(`${serverConfig.preRoute}serverConfig`, (req, res) => {
      res.sendFile(path.join(__dirname, "app/serverConfig.json"));
    });
  }

  includeRoutes() {
    new Route(this.app, serverConfig).routeConfig();
    return;
  }

  start() {
    nodeToRoute.length === 0 && this.appConfig();
    this.includeRoutes();

    let httpPort =
      nodeToRoute.length > 0 ? responseObj.httpPort : serverConfig.httpPort;
    let httpsPort =
      nodeToRoute.length > 0 ? responseObj.httpsPort : serverConfig.httpsPort;

    httpPort &&
      this.httpServer.listen(httpPort, () => {
        console.log("Express server listing on port", httpPort);
      });

    // httpsPort &&
    //     this.httpsServer.listen(httpPort, () => {
    //         console.log('Express server listing on port', httpsPort);
    //     })
  }
}

const server = new Server();
server.start();
