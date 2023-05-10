import React from "react";
import YouTube from "react-youtube";

const Video = () => {
  const opts = {
    height:'100%',
    width: "100%",
    playerVars: {
      autoplay: 1,
      mute: 1,
      loop: 1,
      playlist: "dwfjayxRvqw,dwfjayxRvqw,dwfjayxRvqw",
      controls: 0,
      start: 0,
      opacity: 1,
      showinfo: 0,
      rel: 0,
      disablekb: 1,
      modestbranding: 1,
      playsinline: 1,
      disablePictureInPicture: true,
    },
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1,
  };
  // const overlayStyle = {
  //   position: "absolute",
  //   top: 0,
  //   left: 0,
  //   width: "100%",
  //   height: "100%",
  //   backgroundColor: "rgba(0, 0, 0, 0.5)",
  //   zIndex: 1,
  // };

  const videoBgStyle = {
    // position: "absolute",
    // paddingBottom: "66.25%",
    // overflow: "hidden",
    // width: "100%",
    // height: "0",
    // marginTop: "100px",
  };

  return (
    <div className="video-bg relative" style={videoBgStyle}>
      {/* <div style={overlayStyle2}></div> */}
      <YouTube
        videoId="dwfjayxRvqw"
        opts={opts}
        className="youtube-player sm:h-screen"
      />
      {/* <div style={overlayStyle}></div> */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white sm:text-sm text-3xl font-bold shadow-md"
        style={{ zIndex: 2 }}
      >
        {/* <h1>თქვენი პროექტის მზადების პროცესი</h1>
        <span className="h-[3px] w-[100px] bg-red-700 z-5"></span> */}
      </div>
    </div>
  );
};

export default Video;
