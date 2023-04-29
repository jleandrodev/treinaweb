import React, { useContext, useEffect, useMemo } from "react";
import Video from "./Video";
import { videoStore } from "../../data/video/VideoContext";
import { StorageService } from "../../data/services/StorageService";
import { videoListInitial } from "../../data/services/VideoListInitial";


export default function VideoList(props) {

  const [videoState, videoDispath] = useContext(videoStore)
  const videosList = useMemo(() => {
    function onClick(video) {
      videoDispath({
        type: 'select',
        value: video
      })
    }

    return (
      videoState.videos.map(item => (
        <Video key={item.id} video={item} onClick={onClick} />
      ))
    )
  }, [videoState.videos, videoDispath])

  

  useEffect(() => {
    StorageService.initial(videoListInitial)
  }, [])

  return (
    <ul className="list">
      {
        videosList
      }
    </ul>
  )
}