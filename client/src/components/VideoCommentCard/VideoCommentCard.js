// import all files here
import "./VideoCommentCard.scss";
import placeholderImage from "../../assets/images/images/image-placeholder.jpg";

function VideoCommentCard({ timestamp, name, commentContent }) {
  // to format date
  const date = new Date(timestamp);
  const formattedDate = [
    date.getMonth() + 1,
    date.getDate(),
    date.getUTCFullYear(),
  ].join("/");

  return (
    <article className="comment-card">
      <img className="comment-card__image" src={placeholderImage} alt="" />

      <div className="comment-card__details">
        <div className="comment-card__wrapper">
          <h3 className="comment-card__name">{name}</h3>
          <time className="comment-card__date">{formattedDate}</time>
        </div>
        <div>
          <p className="comment-card__text">{commentContent}</p>
        </div>
      </div>
    </article>
  );
}

export default VideoCommentCard;
