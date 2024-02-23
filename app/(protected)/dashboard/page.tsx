import { auth } from '@/auth';
import Navbar from '@/components/Navbar/Navbar'
import React from 'react'

const Dashboard = async () => {
const session = await auth(); 
  return (
    <div>
      <Navbar />
      <div>{JSON.stringify(session?.user)}</div>

    </div>
  )
}

export default Dashboard