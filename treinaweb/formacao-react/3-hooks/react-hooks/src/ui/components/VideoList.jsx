import React, { useContext, useEffect } from "react";
import Video from "./Video";
import { videoStore } from "../../data/video/VideoContext";
import { StorageService } from "../../data/services/StorageService";
import { videoListInitial } from "../../data/services/VideoListInitial";


export default function VideoList(props) {

  const [videoState, videoDispath] = useContext(videoStore)

  function onClick(video) {
    videoDispath({
      type: 'select',
      value: video
    })
  }

  useEffect(() => {
    StorageService.initial(videoListInitial)
  }, [])

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