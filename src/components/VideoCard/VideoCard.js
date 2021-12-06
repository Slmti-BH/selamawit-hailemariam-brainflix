import "./VideoCard.scss";


const VideoCard = (props) => {
  console.log(props);
  const handleVideoSelect = (event) => {
    event.preventDefault();
    props.onVideoSelect(props.id);
  };

  return (
    <article className="video-card" onClick={handleVideoSelect}>
      <div className="video-card__container">
        <div className="video-card__image-container">
          <img className="video-card__image" src={props.src} alt="" />
        </div>
        <div className="video-card__details-wrapper">
          <h3 className="video-card__title">{props.title}</h3>
          <p className="video-card__text">{props.channel}</p>
        </div>
      </div>
    </article>
  );
};

export default VideoCard;
