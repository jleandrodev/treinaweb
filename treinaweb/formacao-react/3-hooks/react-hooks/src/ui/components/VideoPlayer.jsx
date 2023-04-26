import React, {useEffect, useRef, useState} from 'react'
import { TimeService } from '../../data/services/TimeService'

const _selectedVideo = {
  id: 1,
  title: 'Como fazer um bolo de chocolate',
  duration: 12,
  url: 'https://joy1.videvo.net/videvo_files/video/free/2014-12/small_watermarked/Raindrops_Videvo_preview.webm',
  cover: 'https://images.freeimages.com/images/previews/fca/peppers-falling-into-water-1142701.jpg'
}

export default function VideoPlayer() {

  const video = _selectedVideo
  const videoRef = useRef()
  const [ isPlaying, setPlay ] = useState(false)

  useEffect(() => {
    const videoElement = videoRef.current

    videoElement.addEventListener('play', play)
    videoElement.addEventListener('pause', pause)
    videoElement.addEventListener('seeked', progress)

    return () => {
      videoElement.removeEventListener('play', play)
      videoElement.removeEventListener('pause', pause)
      videoElement.removeEventListener('seeked', progress)
    }
  }, [video])

  function play() {
    videoRef.current.play()
    setPlay(true)
  }

  function pause() {
    videoRef.current.pause()
    setPlay(false)
  }

  function progress() {

  }


  return (
    <div className='video-player'>
      <video src={video.url} ref={videoRef} />
      <div className='controls'>
        <button onClick={isPlaying ? pause : play}>
          { isPlaying ? '||' : '|>' }
        </button>
        <span>10:20 / {TimeService.formatTime(video.duration)}</span>
        <input type="range" min={0} max={video.duration} step={.1} />
      </div>
      <h2>{video.title}</h2>
    </div>
  )
}