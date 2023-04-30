import { useState } from "react"

export default function TextCounter() {
  const [ count, setCount ] = useState(0)

  


  return (
    <div>
      <textarea onChange={(event) => setCount(event.target.value.length)} />
      <p>
        Caracteres: { count }
      </p>
    </div>
  )
}