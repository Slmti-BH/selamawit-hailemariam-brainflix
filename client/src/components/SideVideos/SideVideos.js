import React from "react";
import { Link } from "react-router-dom";
import VideoCard from "../VideoCard/VideoCard";
import "./SideVideos.scss";

function SideVideos(props) {

  return (
    <section className="side-videos">
      <h1 className="side-videos__title">NEXT VIDEOS</h1>
      <div className="side-videos__container">
        {props.videos.map((video) => {
          return (
            // use Link instead of onClick handlers
            <Link className="side-videos__link" to={`/videos/${video.id}`} key={video.id}>
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
