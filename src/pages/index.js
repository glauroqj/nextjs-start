import Head from 'next/head'
/** container */
import Layout from 'containers/Layout'

const Home = () => {
  return (
    <Layout>
      <div>
        <Head>
          <title>Create Next App - Test</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <h1>
            HOME PAGE
          </h1>

        </main>

      </div>
    </Layout>
  )
}

export default Home