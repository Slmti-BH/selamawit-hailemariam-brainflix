// import all files here
import "./CommentForm.scss";
import ProfileImageContainer from "../ProfileImageContainer/ProfileImageContainer";

function CommentForm(){
    return (
      <section className="comment-form-section">
        <h1 className="comment-form-section__title">JOIN THE CONVERSATION</h1>
        <div className="comment-form-section__wrapper">
          <ProfileImageContainer />
          <div className="comment-form-section__form-container">
            <form className="comment-form-section__form" action="">
              <textarea
                placeholder="Add a new comment"
                className="comment-form-section__form-textarea"
               
              ></textarea>
              <button className="comment-form-section__form-button">
                COMMENT
              </button>
            </form>
          </div>
        </div>
      </section>
    );
}

export default CommentForm;