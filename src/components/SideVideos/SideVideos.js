import VideoCard from "../VideoCard/VideoCard"

function SideVideos(props){
    console.log(props)
    return (
      <section>
        <h2>NEXT VIDEOS</h2>
        {props.videos.map(video=>{
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
      
      </section>
    )
}

export default SideVideos;