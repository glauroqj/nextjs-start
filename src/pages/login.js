import Head from 'next/head'
/** container */
import Layout from '../containers/Layout'
import styles from '../styles/Home.module.css'

const Login = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Create Next App - Test</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            LOGIN PAGE
          </h1>

          <div>
            <form method="post">

              <div>
                <label htmlFor="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required />

                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required />

                <button type="submit">Login</button>
              </div>

            </form>
          </div>

        </main>

      </div>
    </Layout>
  )
}

export default Login