import React from "react";
import { Link } from "react-router-dom";
import VideoCard from "../VideoCard/VideoCard";
import "./SideVideos.scss";

function SideVideos(props) {
  // console.log(props)
  return (
    <section className="side-videos">
      <h2 className="side-videos__title">NEXT VIDEOS</h2>
      <div className="side-videos__container">
        {props.videos.map((video) => {
          return (
            <Link to={`/videos/${video.id}`} key={video.id}>
              <VideoCard
                id={video.id}
                src={video.image}
                title={video.title}
                channel={video.channel}
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default SideVideos;
