import React, { useContext } from "react";
import Video from "./Video";
import { videoStore } from "../../data/video/VideoContext";


export default function VideoList(props) {

  const [videoState, videoDispath] = useContext(videoStore)

  function onClick(video) {
    videoDispath({
      type: 'select',
      value: video
    })
  }

  return (
    <ul className="list">
      {
        videoState.videos.map(item => (
          <Video key={item.id} video={item} onClick={onClick} />
        ))
      }
    </ul>
  )
}