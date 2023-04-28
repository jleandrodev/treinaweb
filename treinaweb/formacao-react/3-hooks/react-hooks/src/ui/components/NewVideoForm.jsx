import React, { useContext, useState } from 'react'
import { videoStore } from '../../data/video/VideoContext'

export default function NewVideoForm() {

  const [, videoDispath ] = useContext(videoStore)
  const [ title, setTitle ] = useState()
  const [ duration, setDuration ] = useState()
  const [ url, setUrl ] = useState()
  const [ cover, setCover ] = useState()

  function save() {
    const newVideo = {
      title,
      duration,
      url,
      cover
    }
    videoDispath({ 
      type: 'add',
      value: newVideo
    })

    reset()
  }

  function reset() {
    setTitle('')
    setDuration('')
    setUrl('')
    setCover('')
  }

  return (
    <div className='form'>
      <label>Título:</label>
      <input type='text' value={title} onChange={(event) => setTitle(event.target.value)} />

      <label>Duração:</label>
      <input type='text' value={duration} onChange={(event) => setDuration(event.target.value)} />

      <label>URL:</label>
      <input type='text' value={url} onChange={(event) => setUrl(event.target.value)} />

      <label>Capa:</label>
      <input type='text' value={cover} onChange={(event) => setCover(event.target.value)} />

      <button onClick={save}>
        Salvar
      </button>
    </div>
  )
}