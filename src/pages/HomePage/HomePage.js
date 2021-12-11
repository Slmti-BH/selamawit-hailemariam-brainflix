import { Component } from "react";
import videosData from "../../data/videos.json";
import videoDetailsData from "../../data/video-details.json";
import MainVideo from "../../components/MainVideo/MainVideo";
import SideVideos from "../../components/SideVideos/SideVideos";
import MainVideoDetails from "../../components/MainVideoDetails/MainVideoDetails";
import "./HomePage.scss";

class HomePage extends Component {
  state = {
    videos: videosData,
    selectedVideo: videoDetailsData[0],
  };
  handleVideoSelect = (id) => {
    this.setState({
      selectedVideo: videoDetailsData.find((video) => video.id === id),
    });
  };
  render() {
    const filteredVideosData = videosData.filter(
      (video) => video.id !== this.state.selectedVideo.id
    );
    return (
      <div>
        

        <MainVideo selectedVideo={this.state.selectedVideo} />
        <div className="video-detail-videos-container">
          <MainVideoDetails selectedVideo={this.state.selectedVideo} />
          <SideVideos
            videos={filteredVideosData}
            onVideoSelect={this.handleVideoSelect}
          />
        </div>
      </div>
    );
  }
}

export default HomePage;
