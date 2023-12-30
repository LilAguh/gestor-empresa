import { useState } from 'react'
import Form from './components/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex w-full h-screen'>
      <div  className='w-full flex item-center justify-center lg:w-1/2'>
        <Form/>
      </div>
      <div className='hidden lg:flex h-full items-center justify-center bg-gray-800 '>
      </div>
    </div>
  )
}

export default App
