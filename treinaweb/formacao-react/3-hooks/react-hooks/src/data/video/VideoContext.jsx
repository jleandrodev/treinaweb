import { createContext, useReducer } from "react"
import { videoInitialState, VideoReducer } from "./VideoReducer"

export const videoStore =createContext(videoInitialState)
const {Provider} = videoStore

export function VideoContext(props) {

  const [ state, dispath ] = useReducer(VideoReducer, videoInitialState)

  return (
    <Provider value={[state, dispath]}>
      {props.children}
    </Provider>
  )  


}