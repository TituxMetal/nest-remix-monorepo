import { type LoaderFunctionArgs } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'

export const loader = ({ context }: LoaderFunctionArgs) => {
  const message = context.remixService.getHello()

  // eslint-disable-next-line no-console -- Expected console statement.
  console.log({ message })

  return { message }
}

const ApiPage = () => {
  const { message } = useLoaderData<typeof loader>()

  return (
    <div className='bg-blue-900 p-4 font-sans'>
      <h1 className='text-3xl text-green-500'>Message from backend: {message}</h1>
      <p className='text-2xl'>
        Edit this file in <code>app/routes/api.tsx</code>
      </p>
      <button type='button' className='my-2 rounded-md border border-sky-200 p-4 text-xl'>
        <Link to='/'>Home</Link>
      </button>
    </div>
  )
}

export default ApiPage
