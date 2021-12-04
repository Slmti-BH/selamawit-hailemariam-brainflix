function VideoCommentCard(props) {
  return (
    <div>
      <img src="" alt="" />
      <div>
        <h3>{props.name}</h3>
        <time>{props.timestamp}</time>
      </div>
      <div>
        <p>{props.commentContent}</p>
      </div>
    </div>
  );
}

export default VideoCommentCard;
