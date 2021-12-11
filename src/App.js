import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import Upload from "./pages/UploadPage/UploadPage";
export const API_KEY="f6a5670f-883f-4a35-bfb9-e14febd77864";
export const BrainFlix_URL="https://project-2-api.herokuapp.com";                                                                                                                                                                                                                                                                                                                                                                                                  
// class App extends Component {
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
//         <Header />

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

// export default App;
function App() {
  return (
    <BrowserRouter>
        <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/upload" component={Upload} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
