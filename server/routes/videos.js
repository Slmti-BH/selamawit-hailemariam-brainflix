// import all files here
const { Router } = require("express");
const fs = require("fs");
const videosRoutes = Router();
const { v4: uuid } = require("uuid");
// to make .env files available
require("dotenv").config();
const API_KEY = process.env.API_KEY;

//to from videos.json
const readData = () => {
  const videosData = fs.readFileSync("./data/videos.json");
  return JSON.parse(videosData);
};

// to write to videos.json
const writeFile = (videosData) => {
  fs.writeFileSync("./data/videos.json", JSON.stringify(videosData));
};

// middle ware to check api_key
const apiKeyCheck = (req, res, next) => {
  const client_API_KEY = req.query.api_key;
  if (client_API_KEY !== API_KEY) {
    res.status(400).send("Please make sure to use the right api_key.");
  } else {
    next();
  }
};

//get all videos
videosRoutes.get("/", apiKeyCheck, (_req, res) => {
  const videosData = readData();
  newVideoData = videosData.map((videoItem) => {
    const {
      description,
      views,
      likes,
      duration,
      video,
      timestamp,
      comments,
      ...videosKeys
    } = videoItem;
    return videosKeys;
  });
  res.status(200).json(newVideoData);
});

//get video details by Id
videosRoutes.get("/:videoId", apiKeyCheck, (req, res) => {
  const videoData = readData();
  const video = videoData.find((video) => video.id === req.params.videoId);
  if (!video) {
    return res.status(404).send("The video is not found.");
  }
  res.status(200).json(video);
});

// validation for endpoints to make sure the data required is sent in a request
const videoValidation = (req, res, next) => {
  if (!req.body.title || !req.body.description) {
    res
      .status(400)
      .send("Please make sure to include title and description of the video.");
  } else {
    next();
  }
};

// to post a video
videosRoutes.post("/", videoValidation, apiKeyCheck, (req, res) => {
  const videosData = readData();

  // to create video object with id
  const newVideo = {
    id: uuid(),
    title: req.body.title,
    description: req.body.description,
    views: 0,
    likes: 0,
    duration: "5:58",
    video: "https://project-2-api.herokuapp.com/stream",
    timestamp: Date.now(),
    comments: [],
    image: "/images/image4.jpeg",
  };
  // update videosData and write to videos.json file
  videosData.push(newVideo);
  writeFile(videosData);
  // send created video
  res.status(201).json(newVideo);
});

module.exports = videosRoutes;
