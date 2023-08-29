import { Inter } from 'next/font/google'
import axios from 'axios'
import { Button } from "@/components/ui/button"
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [quote, setQuote] = useState()
  const [author, setAuthor] = useState()
  const getQuote = () => {
    axios.get('https://api.quotable.io/random')
      .then((res) => {
        console.log(res)
        setQuote(res.data.content)  // now the quota variable has data object that is returned
        setAuthor(res.data.author)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
      <>
        <div className='flex justify-center mt-[25%]'>
          <Button onClick={getQuote} className='border-solid border-red-600'>
            Get me a good quote to start my day
          </Button>
        </div>
        <div className='ml-[10%] mt-[30%] mr-[10%]'>
          <p> <b> Author : </b> {author} </p> <br />
          <p> <b> Quote : </b> {quote} </p>
        </div>
        <div className='mt-[50%] flex justify-center'>
          Meet the developer - <a href='https://therealdhruv.tech' target='_blank' className='ml-1'> Dhruv Pankaj Patel </a>
        </div>
      </>
  )
}
