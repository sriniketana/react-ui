module.exports = (/*options*/) => {
  // Use options.server to access http.Server. Example with socket.io:
  //     const io = require('socket.io')(options.server)
  const express = require("express");
  const app = express();
  const bodyParser = require("body-parser");
  app.use(express.static(__dirname + "/client/build"));

  app.use(bodyParser.urlencoded({ extended: false }));

  app.get("/", (req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.sendfile("index.html");
  });

  app.get("/resorts", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(
      JSON.stringify([
        {
          _id: "1234",
          name: "Hyatt Beach resort",
          image:
            "https://cdn.getawaytoday.com/image/4660/6444/hyatt-regency-huntington-beach-resort-and-spa-pool-r.jpg",
          likes: "400",
          cost: "$ 8000",
        },
        {
          _id: "2234",
          name: "Four Seasons resort",
          image:
            "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fs3-eu-west-1.amazonaws.com%2Fhtsi-ez-prod%2Fez%2Fimages%2F0%2F6%2F4%2F0%2F1270460-1-eng-GB%2FMALDIVESWater-Villa---Outdoor-deck.jpg?height=930&dpr=1&format=jpg&source=htsi",
          likes: "800",
          cost: "$ 9000",
        },
        {
          _id: "1234",
          name: "Hyatt Beach resort",
          image:
            "https://cdn.getawaytoday.com/image/4660/6444/hyatt-regency-huntington-beach-resort-and-spa-pool-r.jpg",
          likes: "400",
          cost: "$ 8000",
        },
        {
          _id: "2234",
          name: "Four Seasons resort",
          image:
            "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fs3-eu-west-1.amazonaws.com%2Fhtsi-ez-prod%2Fez%2Fimages%2F0%2F6%2F4%2F0%2F1270460-1-eng-GB%2FMALDIVESWater-Villa---Outdoor-deck.jpg?height=930&dpr=1&format=jpg&source=htsi",
          likes: "800",
          cost: "$ 9000",
        },
      ])
    );
  });

  return app;
};
