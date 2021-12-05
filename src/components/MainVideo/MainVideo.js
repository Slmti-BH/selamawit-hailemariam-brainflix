function MainVideo(props) {
  console.log(props);
  return (
    <div>
      <video  width= "100%" className="main-video" controls poster={props.selectedVideo.image}>
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default MainVideo;
 
