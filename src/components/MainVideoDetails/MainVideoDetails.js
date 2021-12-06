import CommentForm from "../CommentForm/CommentForm";
import VideoCommentCard from "../VideoCommentCard/VideoCommentCard"
import "./MainVideoDetails.scss";

function MainVideoDetails(props) {
    let date = new Date(props.selectedVideo.timestamp);
    const formattedDate = [
      date.getMonth() + 1,
      date.getDate(),
      date.getUTCFullYear(),
    ].join("/");
  return (
    <section className="main-video-details">
      <h1 className="main-video-details__title">{props.selectedVideo.title}</h1>
      <div className="main-video-details__wrapper">
        <div className="main-video-details__title-date-wrapper">
          <h3 className="main-video-details__subtitle">
            By {props.selectedVideo.channel}
          </h3>
          <time className="main-video-details__date">{formattedDate}</time>
        </div>
        <div className="main-video-details__views-likes-wrapper">
          <span className="main-video-details__views">
            {props.selectedVideo.views}
          </span>{" "}
          <span className="main-video-details__likes">
            {props.selectedVideo.likes}
          </span>
        </div>
      </div>
      <div className="main-video-details__description-container">
        <p className="main-video-details__description-text">
          {props.selectedVideo.description}
        </p>
        <p className="main-video-details__comments-count">
          {props.selectedVideo.comments.length} Comments
        </p>
      </div>
      <CommentForm />
      <section>
        <div>
          {props.selectedVideo.comments.map((comment) => {
            return (
              <VideoCommentCard
                name={comment.name}
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
