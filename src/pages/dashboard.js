import Head from 'next/head'
/** container */
import ProtectedLayout from '../containers/ProtectedLayout'

const Dashboard = () => {
  return (
    <ProtectedLayout>
      <div>
        <main>
          <h1>
            DASHBOARD PAGE - PROTECTED
          </h1>

        </main>

      </div>
    </ProtectedLayout>
  )
}

export default Dashboard