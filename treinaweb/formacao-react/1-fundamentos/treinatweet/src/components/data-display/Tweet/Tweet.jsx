import styles from './Tweet.module.css'

export default function Tweet({ tweet }) {
  return (
    <div className={styles['tweet-container']}>
      <img className={styles['avatar']} src={tweet.user.picture} alt='' />
      <div className={styles['user']}>
        <span className={styles['user-name']}>{ tweet.user.name }</span>
        <span className={styles['user-username']}>{ tweet.user.username }</span>
        <span className={styles['date']}>{ tweet.date }</span>
      </div>
      <div className={styles['tweet-text']}>{ tweet.text }</div>
    </div>
  )
}