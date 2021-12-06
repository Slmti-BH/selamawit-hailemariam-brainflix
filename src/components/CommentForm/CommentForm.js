import "./CommentForm.scss";
import ProfileImageContainer from "../ProfileImageContainer/ProfileImageContainer";

function CommentForm(){
    return (
      <section className="comment-form-section">
        <h2 className="comment-form-section__title">JOIN THE CONVERSATION</h2>
        <div className="comment-form-section__wrapper">
          <ProfileImageContainer />
          <div className="comment-form-section__form-container">
            <form className="comment-form-section__form" action="">
              <textarea
                placeholder="Add a new comment"
                className="comment-form-section__form-textarea"
                name=""
                id=""
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