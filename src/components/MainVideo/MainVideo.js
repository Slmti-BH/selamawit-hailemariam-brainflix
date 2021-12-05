function MainVideo(props) {
  console.log(props);
  return (
    <div>
      <video controls poster={props.selectedVideo.image}>
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default MainVideo;
 
