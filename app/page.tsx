import React from 'react'
import { currentUser } from '@clerk/nextjs/server'
import { checkUser } from '@/lib/checkUser'

export default async function HomePage() {
  const user = await currentUser()
  
  if (user) {
    await checkUser()
  }

  return (
    <div className='text-red-300'>
      {user ? (
        <div>
          <h1>Welcome back, {user.firstName}!</h1>
          <p>Your data is being synced with the database.</p>
        </div>
      ) : (
        <div>
          <h1>Welcome to Sleep Tracker</h1>
          <p>Please sign in to get started.</p>
        </div>
      )}
    </div>
  )
}
