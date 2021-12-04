import VideoCommentCard from "../VideoCommentCard/VideoCommentCard"
import CommentForm from "../CommentForm/CommentForm"

function MainVideo(props){
    
    console.log(props);
    return (
      <>
        <article>
          <video src={props.selectedVideo.video}>
            Your browser does not support the video tag.
          </video>
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
        </article>
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
      </>
    );
}

export default MainVideo;