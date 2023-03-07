import { useState } from 'react'

export const useValue = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  return {
    title,
    description,
    setTitle,
    setDescription
  }
}