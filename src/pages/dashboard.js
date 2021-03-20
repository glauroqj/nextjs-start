import Head from 'next/head'
/** container */
import ProtectedLayout from '../containers/ProtectedLayout'
import styles from '../styles/Home.module.css'

const Dashboard = () => {
  return (
    <ProtectedLayout>
      <div className={styles.container}>
        <Head>
          <title>Create Next App - Test</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            DASHBOARD PAGE - PROTECTED
          </h1>

        </main>

      </div>
    </ProtectedLayout>
  )
}

export default Dashboard