import { Link } from '@remix-run/react'

const AboutRoute = () => {
  return (
    <div className='items-center justify-evenly flex flex-col border-lime-400 border-2 w-screen-lg h-screen'>
      <h1 className='text-5xl text-blue-400/80 font-bold'>About</h1>
      <p className='text-2xl text-red-400'>This is the about page</p>
      <button type='button' className='my-2 border border-sky-200 p-4 rounded-md'>
        Go to <Link to='/'>Index</Link>
      </button>
    </div>
  )
}

export default AboutRoute
