import videoThumbnail from "../../assets/images/images/Upload-video-preview.jpg";
import "./UploadPage.scss";
import axios from "axios";
import { API_KEY } from "../../App";
import { BrainFlix_URL } from "../../App";

function UploadPage(props) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const titleInput = event.target.title.value;
    const contentInput = event.target.content.value;
    // create body content for post request
    const body = { title: titleInput, description: contentInput };
    // to make post request
    axios
      .post(`${BrainFlix_URL}/videos?api_key=${API_KEY}`, body)
      .then((response) => response.data)
      .catch((error) => console.log(error));

    event.target.reset();
    alert("Video published.");
    // redirect on form submit
    props.history.push("/");
  };

  // on cancelling upload
  const handleCancel = () => {
    alert("Video upload cancelled.");
    props.history.push("/");
  };
  return (
    <main className="upload-page">
      <h1 className="upload-page__title">Upload Video</h1>
      <div className="upload-page__container">
        <div className="upload-page__subtitle-img-container">
          <h2 className="upload-page__subtitle">VIDEO THUMBNAIL</h2>
          <img className="upload-page__img" src={videoThumbnail} alt="" />
        </div>
        <form
          id="upload-form"
          className="upload-page__form"
          onSubmit={handleSubmit}
        >
          <label className="upload-page__form-label" htmlFor="title">
            TITLE YOUR VIDEO
          </label>
          <input
            className="upload-page__form-title"
            type="text"
            name="title"
            placeholder="Add a title to your video"
            required
          />
          <label className="upload-page__form-label" htmlFor="content">
            ADD A VIDEO DESCRIPTION
          </label>
          <textarea
            className="upload-page__form-description"
            type="text"
            name="content"
            id=""
            cols="30"
            rows="10"
            placeholder="Add a description to your video"
            required
          ></textarea>
        </form>
      </div>
      <div className="upload-page__btn-container">
        <button
          form="upload-form"
          type="submit"
          className="upload-page__publish-btn"
        >
          PUBLISH
        </button>
        <button className="upload-page__cancel-btn" onClick={handleCancel}>
          CANCEL
        </button>
      </div>
    </main>
  );
}

export default UploadPage;

