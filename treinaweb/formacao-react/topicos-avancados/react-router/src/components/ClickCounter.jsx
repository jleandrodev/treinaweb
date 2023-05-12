import { useState } from "react";

export default function ClickCounter(props) {
    const [ totalClicks, setTotalClicks ] = useState(0)
    const [ isChecked, setIsChecked ] = useState(false)

    function handleClick() {
      setIsChecked(!isChecked)
      setTotalClicks(totalClicks + 1)
    }

    return (
      <div>
        <input type="checkbox" checked={isChecked} onChange={handleClick} />
        <span>
          { isChecked ? 'ON' : 'OFF' }
        </span>
        <div>
          Clicks: { totalClicks }
        </div>
      </div>
    )
}