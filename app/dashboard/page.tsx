import Navbar from '@/components/Navbar/Navbar'
import { getServerSession } from 'next-auth'
import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/auth'

const Dashboard = async () => {
  const session = await getServerSession(authOptions)
  return (
    <div>
      <Navbar />
      <div>{JSON.stringify(session?.user)}</div>

    </div>
  )
}

export default Dashboard