import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {

  console.log('< LOGIN > ', process.env.APP_ENVIRONMENT)

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App - Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          LOGIN ROUTE
        </h1>
      </main>

    </div>
  )
}
