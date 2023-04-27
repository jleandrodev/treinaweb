import React, {useEffect, useRef, useState} from 'react'
import { TimeService } from '../../data/services/TimeService'

const _selectedVideo = {
  id: 1,
  title: 'Como fazer um bolo de chocolate',
  duration: 23,
  url: 'https://joy1.videvo.net/videvo_files/video/free/2019-07/small_watermarked/190625_04_CityMisc_HD_05_preview.webm',
  cover: 'https://images.freeimages.com/images/previews/fca/peppers-falling-into-water-1142701.jpg'
}

export default function VideoPlayer() {

  const video = _selectedVideo
  const videoRef = useRef()
  const [ isPlaying, setPlay ] = useState(false)
  const [ progress, setProgress ] = useState(0)
  const progressTimer = useRef()

  useEffect(() => {
    const videoElement = videoRef.current

    videoElement.addEventListener('play', play)
    videoElement.addEventListener('pause', pause)
    videoElement.addEventListener('seeked', onProgress)

    return () => {
      videoElement.removeEventListener('play', play)
      videoElement.removeEventListener('pause', pause)
      videoElement.removeEventListener('seeked', onProgress)
      setTime(0)
      pause()
    }
  }, [video])

  useEffect(() => {
    clearInterval(progressTimer.current)
    if(isPlaying){

      progressTimer.current = setInterval(onProgress, 1000)
    
    }

  }, [isPlaying])

  function play() {
    videoRef.current.play()
    setPlay(true)
  }

  function pause() {
    videoRef.current.pause()
    setPlay(false)
  }

  function onProgress() {
    setProgress(videoRef.current.currentTime)
  }

  function onChangeProgress(event) {
    setTime(event.target.value)
  }

  function setTime(time) {
    videoRef.current.currentTime = time
    onProgress()
  }


  return (
    <div className='video-player'>
      <video 
        src={video.url} 
        ref={videoRef}
        loop={false} 
      />
      {video.url && (
        <>
        <div className='controls'>
          <button onClick={isPlaying ? pause : play}>
            { isPlaying ? '||' : '|>' }
          </button>
          <span>{TimeService.formatTime(Math.round(progress))} / {TimeService.formatTime(video.duration)}</span>
          <input 
            type="range" 
            value={progress} 
            min={0} 
            max={video.duration} 
            step={.1} 
            onChange={onChangeProgress}
          />
        </div>
        <h2>{video.title}</h2>
        
        </>

      )}
    </div>
  )
}