import CommentForm from "../CommentForm/CommentForm";
import VideoCommentCard from "../VideoCommentCard/VideoCommentCard"
function MainVideoDetails(props) {
  return (
    <section>
      <h1>{props.selectedVideo.title}</h1>
      <div>
        <div>
          <h3>By {props.selectedVideo.channel}</h3>
          <time>{props.selectedVideo.timestamp}</time>
        </div>
        <div>
          <span>{props.selectedVideo.views}</span> <br />
          <span>{props.selectedVideo.likes}</span>
        </div>
      </div>
      <section>
        <p>{props.selectedVideo.description}</p>
        <p>{props.selectedVideo.comments.length} comments</p>
      </section>
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
      </section>{" "}
      
    </section>
  );
}

export default MainVideoDetails;
