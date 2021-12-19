const { Router } = require("express");
const fs = require("fs");
const videosRoutes = Router();
const { v4: uuid } = require("uuid");

const readData = () => {
  const videosData = fs.readFileSync("./data/videos.json");
  return JSON.parse(videosData);
};

const writeFile = (videosData) => {
  fs.writeFileSync("./data/videos.json", JSON.stringify(videosData));
};

// videosRoutes.get("/", (_req, res) => {
//   res.send("Hello");
// });

// to get all videos

videosRoutes.get("/", (req, res) => {
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

// to get video by Id
videosRoutes.get("/:videoId", (req, res) => {
  const videoData = readData();
  const video = videoData.find((video) => video.id === req.params.videoId);
  if (!video) {
    return res.status(404).send("The video is not found.");
  }
  res.status(200).json(video);
});

// validation for endpoints to make sure the data required is sent in a request
const videoValidation=(req,res,next)=>{
  if(!req.body.title||!req.body.description){
    res
      .status(400)
      .send(
        "Please make sure to include title, channel and description of the video."
      );
  }else{
    next();
  }
}
// to post a video
videosRoutes.post("/", videoValidation, (req,res)=>{
  const videosData=read();

  // to create video object with id
  const newVideo = {
    id: uuid(),
    title: req.body.title,
    description: req.body.description,
    video: "https://project-2-api.herokuapp.com/stream",
    image: "https://i.imgur.com/5qyCZrD.jpg"
  };
  // update videosData and write to videos.json file
  videosData.push(newVideo);
  writeFile(videosData);
  // send created video
  res.status(201).json(newVideo);

} );

module.exports = videosRoutes;
