import VideoCard from "../VideoCard/VideoCard"
import "./SideVideos.scss";
function SideVideos(props){
    console.log(props)
    return (
      <section className="side-videos">
        <h2 className="side-videos__title">NEXT VIDEOS</h2>
        <div className="side-videos__container">
          {props.videos.map((video) => {
            return (
              <VideoCard
                key={video.id}
                id={video.id}
                src={video.image}
                title={video.title}
                channel={video.channel}
                onVideoSelect={props.onVideoSelect}
              />
            );
          })}
        </div>
      </section>
    );
}

export default SideVideos;