import type { MetaFunction } from '@remix-run/node'
import { Link } from '@remix-run/react'

export const meta: MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }]
}

export default function Index() {
  return (
    <div className='items-center justify-evenly flex flex-col border-lime-400 border-2 w-screen-lg h-screen'>
      <h1 className='text-5xl text-orange-500'>Welcome to Remix</h1>
      <p className='text-pink-400 text-2xl'>Helloooo World!</p>
      <button className='my-2 border border-sky-200 p-4 rounded-md'>
        Go to <Link to='about'>About</Link>
      </button>
    </div>
  )
}
