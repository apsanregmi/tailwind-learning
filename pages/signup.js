import React from 'react'
import Signup from '@/src/components/forms/SignupForm'
import Layout from '@/src/layout/Layout'

const signup = () => {
  return (
    <Layout title={"Registration- CloudProAI"}>
    <div>

        <Signup/>
      
    </div>
    </Layout>
  )
}

export default signup
