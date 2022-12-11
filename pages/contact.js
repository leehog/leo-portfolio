import styles from '../styles/Home.module.css'
import Head from 'next/head'

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Leo Gisselberg portfolio - contact</title>
        <meta name='description' content='Contact me :)' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </div>
  )
}
