import { useState } from "react"

export default function TextCounter({limit}) {

  const [text, setText] = useState('')

  return (
    <div>
      <input 
        type="text" 
        maxLength={limit} 
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      {text.length}/{limit}
    </div>
  )
}

