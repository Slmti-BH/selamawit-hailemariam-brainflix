function VideoCommentCard(props) {
  return (
    <div className="comment-card">
      <img className="comment-card__image" src="" alt="" />
      <div className="comment-card__wrapper">
        <h3 className="comment-card__name">{props.name}</h3>
        <time className="comment-card__date">{props.timestamp}</time>
      </div>
      <div>
        <p className="comment-card__text">{props.commentContent}</p>
      </div>
    </div>
  );
}

export default VideoCommentCard;
