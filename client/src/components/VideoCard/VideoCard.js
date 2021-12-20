import "./VideoCard.scss";
import { BrainFlix_URL } from "../../App";

const VideoCard = ({ src, title, channel }) => {
  return (
    <article className="video-card">
      <div className="video-card__container">
        <div className="video-card__image-container">
          <img
            className="video-card__image"
            src={`${BrainFlix_URL}${src}`}
            alt=""
          />
        </div>
        <div className="video-card__details-wrapper">
          <h3 className="video-card__title">{title}</h3>
          <p className="video-card__text">{channel}</p>
        </div>
      </div>
    </article>
  );
};

export default VideoCard;
