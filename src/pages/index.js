import Head from 'next/head'
/** container */
import Layout from '../containers/Layout'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Create Next App - Test</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            HOME PAGE
          </h1>

        </main>

      </div>
    </Layout>
  )
}

export default Home