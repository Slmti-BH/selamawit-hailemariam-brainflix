import Header from "../../components/Header/Header";
import videoThumbnail from "../../assets/images/images/Upload-video-preview.jpg";
import UploadForm from "../../components/UploadForm/UploadForm";

function Upload() {
  return (
    <main>
      <h1>Upload Video</h1>
      <h2>VIDEO THUMBNAIL</h2>
      <img src={videoThumbnail} alt="" />
      <UploadForm />
    </main>
  );
}

export default Upload;
