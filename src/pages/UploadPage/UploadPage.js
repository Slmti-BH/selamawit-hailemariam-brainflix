import videoThumbnail from "../../assets/images/images/Upload-video-preview.jpg";
import "./UploadPage.scss";

function UploadPage(props) {
  // on uploading a video
  const handlePublish = () => {
    alert("Video published.");
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
        <form className="upload-page__form" action="">
          <label className="upload-page__form-label" htmlFor="title">
            TITLE YOUR VIDEO
          </label>
          <input
            className="upload-page__form-title"
            type="text"
            name="title"
            placeholder="Add a title to your video"
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
          ></textarea>
        </form>
      </div>
      <div className="upload-page__btn-container">
        <button className="upload-page__publish-btn" onClick={handlePublish}>
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
