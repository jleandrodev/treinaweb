import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/src/styles/Home.module.css'
import useIndex from '../data/hooks/pages/useIndex.page'


export default function Home() {

  const { posts } = useIndex()

  return (
    <div>
      <Head>
        <title>Treinablog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="shortcut icon" href="favicon.ico" />
      </Head>

      <main>
        
      </main>
    </div>
  )
}
