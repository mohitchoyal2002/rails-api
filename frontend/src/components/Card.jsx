import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({book}) => {

  const navigate = useNavigate()

  const open = ()=>{
    navigate('/book', {state: {book: book}})
  }

  return (
    <div onClick={open} className='p-4 rounded-lg border border-gray-300 mb-4 cursor-pointer shadow-sm hover:shadow-lg'>
      <h1 className='text-3xl text-center'>{book.title}</h1>
    </div>
  )
}

export default Card
