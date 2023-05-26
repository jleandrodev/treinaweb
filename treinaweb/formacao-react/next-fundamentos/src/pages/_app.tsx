import '@/src/styles/globals.css'
import type { AppProps } from 'next/app'
import styles from '../styles/Home.module.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <header>
        <h1 className={styles['title']} >Treina
          <span className={styles['title-second-word']}>Blog</span>
        </h1>
      </header>
      <Component {...pageProps} />
    
    </>

  )
}
