import { Component } from "react";
import Header from "./components/Header/Header";
import videosData from "../src/data/videos.json"
import videoDetailsData from "../src/data/video-details.json"
import MainVideo from "./components/MainVideo/MainVideo";
import SideVideos from "./components/SideVideos/SideVideos";
import MainVideoDetails from "./components/MainVideoDetails/MainVideoDetails"



class App extends Component {
  state = {
    videos: videosData,
    selectedVideo: videoDetailsData[0],
  };
  handleVideoSelect=(id)=> {
    this.setState({
      selectedVideo: videoDetailsData.find((video) => video.id === id),
    });
  }
  render() {
    const filteredVideosData = videosData.filter(
      (video) => video.id !== this.state.selectedVideo.id
    );
    return (
      <>
        <Header />
        <MainVideo selectedVideo={this.state.selectedVideo} />
        <MainVideoDetails selectedVideo={this.state.selectedVideo} />
        <SideVideos
          videos={filteredVideosData}
          onVideoSelect={this.handleVideoSelect}
        />
      </>
    );
  }
}

export default App;
