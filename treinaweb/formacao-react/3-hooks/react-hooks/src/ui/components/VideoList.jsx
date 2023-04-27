import React, { useContext } from "react";
import Video from "./Video";
import { videoStore } from "../../data/video/VideoContext";


export default function VideoList(props) {

  const [videoState] = useContext(videoStore)

  function onClick(video) {
    console.log(video)
  }

  return (
    <ul className="list">
      {
        videoState.list.map(item => (
          <Video key={item.id} video={item} onClick={onClick} />
        ))
      }
    </ul>
  )
}