import { type LoaderFunctionArgs } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

export const loader = ({ context }: LoaderFunctionArgs) => {
  return { message: context.remixService.getHello() }
}

const ApiPage = () => {
  const { message } = useLoaderData<typeof loader>()

  return (
    <div className='font-sans p-4 bg-blue-900'>
      <h1 className='text-3xl text-green-500'>{message}</h1>
      <p className='text-2xl'>
        Edit this file in <code>app/routes/api.tsx</code>
      </p>
    </div>
  )
}

export default ApiPage
