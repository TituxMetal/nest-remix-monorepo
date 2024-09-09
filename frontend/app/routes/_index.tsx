import { type MetaFunction } from '@remix-run/node'
import { Link } from '@remix-run/react'

export const meta: MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }]
}

const Index = () => {
  return (
    <div className='w-screen-lg flex h-screen flex-col items-center justify-evenly border-2 border-lime-400'>
      <h1 className='text-5xl text-orange-500'>Welcome to Remix</h1>
      <p className='text-2xl text-pink-400'>Helloooo World!</p>
      <button type='button' className='my-2 rounded-md border border-sky-200 p-4'>
        Go to <Link to='about'>About</Link>
      </button>
    </div>
  )
}

export default Index
