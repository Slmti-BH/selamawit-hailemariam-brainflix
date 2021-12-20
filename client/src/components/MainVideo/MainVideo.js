import { BrainFlix_URL } from "../../App";
import { API_KEY } from "../../App";
import  {v4 as uuid}   from "uuid";
import "./MainVideo.scss"

function MainVideo(props) {
  return (
    <div className="main-video">
      <video key={uuid()}
        width="100%"
        className="main-video"
        controls
        poster={`${BrainFlix_URL}${props.selectedVideo.image}`}
      >
        <source src={`${props.selectedVideo.video}?api_key=${API_KEY}`}></source>
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default MainVideo;
