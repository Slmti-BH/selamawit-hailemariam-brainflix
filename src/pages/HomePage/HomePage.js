import React, { Component } from "react";
import axios from "axios";

import MainVideo from "../../components/MainVideo/MainVideo";
import SideVideos from "../../components/SideVideos/SideVideos";
import MainVideoDetails from "../../components/MainVideoDetails/MainVideoDetails";
import { API_KEY } from "../../App";
import { BrainFlix_URL } from "../../App";
import "./HomePage.scss";

class HomePage extends Component {
  // set state to be empty/null
  state = {
    videos: [],
    selectedVideo: null,
  };

  componentDidMount() {
    // get data from AP and set in state
    axios
      .get(`${BrainFlix_URL}/videos?api_key=${API_KEY}`)
      .then((response) => {
        this.setState({
          videos: response.data,
        });
        return response.data[0].id;
      })
      .then((firstVideoId) => {
        // firstVideoId has value of response.data[0].id from previous .then
        let videoToLoad;
        // if video selected, load the selected video
        this.props.match.params.videoId
          ? (videoToLoad = this.props.match.params.videoId)
          : (videoToLoad = firstVideoId);

        /*when no video selected use the default video id on homepage*/

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
      .catch((err) => {
        console.log(err);
        this.props.history.push("/404");

        /*when wrong  url is used redirect to page not found  */
      });
  };

  componentDidUpdate(prevProps) {
    const prevVideoId = prevProps.match.params.videoId;
    const currVideoId = this.props.match.params.videoId;
    // fetch details only if the selected-video-id is different from the previous selected-video-id
    const videoIdToLoad = currVideoId ? currVideoId : this.state.videos[0].id;
    if (prevVideoId !== currVideoId) {
      this.fetchVideoDetails(videoIdToLoad);
    }
  }

  render() {
    // to filter out the selected video from the side-videos
    let filteredVideosData;
    this.state.selectedVideo === null
      ? (filteredVideosData = this.state.videos.filter(
          (video) => video.id !== this.state.videos[0].id
        ))
      : (filteredVideosData = this.state.videos.filter(
          (video) => video.id !== this.state.selectedVideo.id
        ));

    return (
      <div>
        {/* main video component */}
        {this.state.selectedVideo ? (
          <MainVideo selectedVideo={this.state.selectedVideo} />
        ) : (
          <h1 className="home-page__message">Loading...</h1>
        )}
        <div className="home-page__video-detail-videos-container">
          {/* main video details component */}
          {this.state.selectedVideo ? (
            <MainVideoDetails selectedVideo={this.state.selectedVideo} />
          ) : (
            <h1 className="home-page__message">Loading...</h1>
          )}
          {/*side videos component */}
          <SideVideos
            videos={filteredVideosData}
            onVideoSelect={this.fetchVideoDetails}
          />
        </div>
      </div>
    );
  }
}

export default HomePage;
