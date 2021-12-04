import ProfileImageContainer from "../ProfileImageContainer/ProfileImageContainer";

function CommentForm(){
    return (
      <section>
        <ProfileImageContainer />
        <div>
          <h2>JOIN THE CONVERSATION</h2>
          <form action="">
              <textarea name="" id="" cols="30" rows="4">Add a new comment</textarea>
              <button>COMMENT</button>
          </form>
        </div>
      </section>
    );
}

export default CommentForm;