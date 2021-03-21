import Head from 'next/head'
/** container */
import Layout from 'containers/Layout'

const Login = () => {
  return (
    <Layout>
      <div>
        <main>
          <h1>
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