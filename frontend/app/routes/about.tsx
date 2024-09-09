import { Link } from '@remix-run/react'

const AboutRoute = () => {
  return (
    <div className='w-screen-lg flex h-screen flex-col items-center justify-evenly border-2 border-lime-400'>
      <h1 className='text-5xl font-bold text-blue-400/80'>About</h1>
      <p className='text-2xl text-red-400'>This is the about page</p>
      <button type='button' className='my-2 rounded-md border border-sky-200 p-4'>
        Go to <Link to='/'>Index</Link>
      </button>
    </div>
  )
}

export default AboutRoute
