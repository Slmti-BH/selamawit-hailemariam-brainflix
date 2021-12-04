const VideoCard=(props)=>{
  console.log(props);
  const handleVideoSelect=event=>{
    event.preventDefault();
    props.onVideoSelect(props.id);
  }

  return (
    <article>
      <button onClick={handleVideoSelect}>
        <div>
          <img src={props.src} alt="" />
          <div>
            <h3>{props.title}</h3>
            <p>{props.channel}</p>
          </div>
        </div>
      </button>
    </article>
  );
}

export default VideoCard;
