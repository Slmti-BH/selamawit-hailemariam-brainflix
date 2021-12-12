import React, { Component } from "react";
import axios from "axios";
// import videosData from "../../data/videos.json";
// import videoDetailsData from "../../data/video-details.json";
import MainVideo from "../../components/MainVideo/MainVideo";
import SideVideos from "../../components/SideVideos/SideVideos";
import MainVideoDetails from "../../components/MainVideoDetails/MainVideoDetails";
import { API_KEY } from "../../App";
import { BrainFlix_URL } from "../../App";
import "./HomePage.scss";

class HomePage extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  componentDidMount() {
    axios
      .get(`${BrainFlix_URL}/videos?api_key=${API_KEY}`)
      .then((response) => {
        // console.log(response);
        this.setState({
          videos: response.data,
        });
        return response.data[0].id;
      })
      .then((firstVideoId) => {
        let videoToLoad;
        
          this.props.match.params.videoId
            ? videoToLoad = this.props.match.params.videoId
            : videoToLoad = firstVideoId;
        
        // console.log(videoToLoad);
        this.fetchVideoDetails(videoToLoad);
      })
      .catch((err) => console.log(err));
  }

  fetchVideoDetails = (movieId) => {
    axios
      .get(`${BrainFlix_URL}/videos/${movieId}?api_key=${API_KEY}`)
      .then((response) => {
        this.setState({
          selectedVideo: response.data,
        });
      })
      .catch((err) => console.log(err));
  };

  componentDidUpdate(prevProps) {
    //   console.log(this.props);
    const prevVideoId = prevProps.match.params.videoId;
    const currVideoId = this.props.match.params.videoId;

    const videoIdToLoad = currVideoId ? currVideoId : this.state.videos[0].id;
    if (prevVideoId !== currVideoId) {
      this.fetchVideoDetails(videoIdToLoad);
    }
    //   console.log(videoIdToLoad);
  }

  render() {
    let filteredVideosData;
    this.state.selectedVideo === null
      ? (filteredVideosData = this.state.videos.filter(
          (video) => video.id !== this.state.videos[0].id
        ))
      : (filteredVideosData = this.state.videos.filter(
          (video) => video.id !== this.state.selectedVideo.id
        ));
    // if (this.state.selectedVideo === null) {
    //   filteredVideosData = this.state.videos.filter(
    //     (video) => video.id !== this.state.videos[0].id
    //   );
    // } else {
    //   filteredVideosData = this.state.videos.filter(
    //     (video) => video.id !== this.state.selectedVideo.id
    //   );
    // }

    //   console.log(filteredVideosData);
    return (
      <div>
        {this.state.selectedVideo ? (
          <MainVideo selectedVideo={this.state.selectedVideo} />
        ) : (
          <p>Loading...</p>
        )}
        <div className="video-detail-videos-container">
          {this.state.selectedVideo ? (
            <MainVideoDetails selectedVideo={this.state.selectedVideo} />
          ) : (
            <p>Loading...</p>
          )}
          <SideVideos
            videos={filteredVideosData}
            onVideoSelect={this.fetchVideoDetails}
          />
        </div>
      </div>
    );

    // const filteredVideosData = videosData.filter(
    //   (video) => video.id !== this.state.selectedVideo.id
    // );
    // return (
    //   <div>

    //     <MainVideo selectedVideo={this.state.selectedVideo} />
    //      <div className="video-detail-videos-container">
    //        <MainVideoDetails selectedVideo={this.state.selectedVideo} />
    //       <SideVideos
    // //         videos={filteredVideosData}
    // //         onVideoSelect={this.handleVideoSelect}
    // //       />
    // //     </div>
    // //   </div>
    // // );
  }
}

export default HomePage;

// class HomePage extends Component {
//   state = {
//     videos: videosData,
//     selectedVideo: videoDetailsData[0],
//   };
//   handleVideoSelect = (id) => {
//     this.setState({
//       selectedVideo: videoDetailsData.find((video) => video.id === id),
//     });
//   };
//   render() {
//     const filteredVideosData = videosData.filter(
//       (video) => video.id !== this.state.selectedVideo.id
//     );
//     return (
//       <div>

//         <MainVideo selectedVideo={this.state.selectedVideo} />
//         <div className="video-detail-videos-container">
//           <MainVideoDetails selectedVideo={this.state.selectedVideo} />
//           <SideVideos
//             videos={filteredVideosData}
//             onVideoSelect={this.handleVideoSelect}
//           />
//         </div>
//       </div>
//     );
//   }
// }

// export default HomePage;
