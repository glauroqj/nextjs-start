/** MAIN FILE */
import { Provider } from 'next-auth/client'
/** theme */
import { ThemeProvider } from 'styled-components'
import { Reset } from 'styled-reset'
import { GlobalStyle, Theme } from 'assets/theme'
/** next */
import Head from 'next/head'

// Use the <Provider> to improve performance and allow components that call
// `useSession()` anywhere in your application to access the `session` object.
const App = ({ Component, pageProps }) => {
  return (
    <Provider
      // Provider options are not required but can be useful in situations where
      // you have a short session maxAge time. Shown here with default values.
      options={{
        // Client Max Age controls how often the useSession in the client should
        // contact the server to sync the session state. Value in seconds.
        // e.g.
        // * 0  - Disabled (always use cache value)
        // * 60 - Sync session state with server if it's older than 60 seconds
        clientMaxAge: 0,
        // Keep Alive tells windows / tabs that are signed in to keep sending
        // a keep alive request (which extends the current session expiry) to
        // prevent sessions in open windows from expiring. Value in seconds.
        //
        // Note: If a session has expired when keep alive is triggered, all open
        // windows / tabs will be updated to reflect the user is signed out.
        keepAlive: 0
      }}
      session={pageProps.session}
    >
      <Head>
        <title>Nextjs Start</title>
        <link rel="icon" href="/favicon.ico" />
        <link 
          rel="preload"
          as='style'
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Roboto:wght@400;500;700&display=swap" 
        />
        <link 
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Roboto:wght@400;500;700&display=swap" 
          onLoad="this.media='all'"
        />
      </Head>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Reset />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default App