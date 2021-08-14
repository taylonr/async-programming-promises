const jsonServer = require("json-server");
const express = require("express");
const path = require("path");
const server = jsonServer.create();
const router = jsonServer.router("./data/db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Referrer-Policy", "same-origin");
  next();
})

server.get("/orderStatuses", (req, res, next) => {
  setTimeout(() => {
    next();
  }, 1500);
});

server.use("/src", express.static(__dirname + "/src/"));
server.use("/home", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});
server.use("/understanding", (req, res) => {
  res.sendFile(path.join(__dirname + "/understanding.html"));
});
server.use("/consuming", (req, res) => {
  res.sendFile(path.join(__dirname + "/consuming.html"));
});
server.use("/creating", (req, res) => {
  res.sendFile(path.join(__dirname + "/creating.html"));
});
server.use("/iterating", (req, res) => {
  res.sendFile(path.join(__dirname + "/iterating.html"));
});

server.use("/service-worker.js", (req, res) =>
  res.sendFile(path.join(__dirname + "/service-worker.js"))
);

server.use(router);
const port = process.env.PORT || 3000
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
}); 
