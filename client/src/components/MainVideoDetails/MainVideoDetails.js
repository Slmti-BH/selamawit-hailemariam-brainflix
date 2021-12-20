import CommentForm from "../CommentForm/CommentForm";
import VideoCommentCard from "../VideoCommentCard/VideoCommentCard";
import "./MainVideoDetails.scss";

function MainVideoDetails(props) {
  const { title, channel, timestamp, views, likes, description, comments } =
    props.selectedVideo;
  // to format date
  let date = new Date(timestamp);
  const formattedDate = [
    date.getMonth() + 1,
    date.getDate(),
    date.getUTCFullYear(),
  ].join("/");
  return (
    <section className="main-video-details">
      <h1 className="main-video-details__title">{title}</h1>
      <div className="main-video-details__wrapper">
        <div className="main-video-details__title-date-wrapper">
          <h2 className="main-video-details__subtitle">By {channel}</h2>
          <time className="main-video-details__date">{formattedDate}</time>
        </div>
        <div className="main-video-details__views-likes-wrapper">
          <span className="main-video-details__views">{views}</span>{" "}
          <span className="main-video-details__likes">{likes}</span>
        </div>
      </div>
      <div className="main-video-details__description-container">
        <p className="main-video-details__description-text">{description}</p>
        <p className="main-video-details__comments-count">
          {comments.length} Comments
        </p>
      </div>
      <CommentForm />
      <section>
        <div>
          {comments.map((comment) => {
            return (
              <VideoCommentCard
                name={comment.name}
                key={comment.name}
                timestamp={comment.timestamp}
                commentContent={comment.comment}
              />
            );
          })}
        </div>
      </section>
    </section>
  );
}

export default MainVideoDetails;
