import { useMemo, useState } from "react"
import { useAPI } from "../useApi"
import { ApiService } from "../../services/ApiService"
import { mutate } from "swr"

export function useIndex() {
  const maxLength = 125,
  user = {
    name: 'Jhonatan Ozório',
    username: '@jleandro',
    picture: 'https://github.com/jleandrodev.png'
  },
  [text, setText] = useState(''),
  tweetsList = useAPI('tweets').data,
  sortedTweetsList = useMemo(() => {
    return (tweetsList || []).sort((a, b) => (a.data.date < b.data.date ? 1 : -1))
  }, [tweetsList])

  function onTextChange (event) {
    const text = event.target.value
    if(text.length <= maxLength) {
      setText(text)
    }
  }

  async function sendTweet() {
    await ApiService.post('tweets', {
      data: {
        user,
        text,
        date: new Date().toISOString()
      }
    })

    setText('')
    mutate('tweets')
  }

  return {
    user,
    text,
    onTextChange,
    maxLength,
    sendTweet,
    sortedTweetsList
  }
}