import { useIndex } from "../hooks/pages/useIndex.page"
import styles from '../styles/pages/index.module.css'
import TextInput from '../components/inputs/TextInput/TextInput';
import Tweet from '../components/data-display/Tweet/Tweet'


export default function Index() {

  const { 
    user,
    text,
    onTextChange,
    maxLength,
    sendTweet,
    sortedTweetsList
   } = useIndex()

  return (
    <div>
      <h1 className={styles['page-title']} >TreinaTweet</h1>
      <div className={styles['tweet-container']}>
        <img className={styles['avatar']} src={user.picture} alt={user.name} />
        <TextInput
            placeholder={'O que está acontecendo?'}
            rows={3}
            maxLength={maxLength}
            value={text}
            onChange={onTextChange}
        />
      </div>
      <div className={styles['button-container']}>
        <div className={styles['counter']}>
          {text.length} / {maxLength}
        </div>
        <button 
          disabled={text.length === 0} 
          className={styles['tweet-button']}
          onClick={sendTweet}
          >
            Tweetar
          </button>
      </div>
      <div>
        <ul className={styles['tweet-list']}>
          {sortedTweetsList.map((tweet) =>
            (
              <li key={tweet.id} className={styles['tweet-item']}>
                <Tweet tweet={tweet.data} />
              </li>
            )
          )}
          
        </ul>
      </div>

    </div>
  )
}