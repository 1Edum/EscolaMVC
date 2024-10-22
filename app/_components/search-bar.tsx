import React from 'react'
import { Input } from './ui/input'
import { Search } from 'lucide-react'

interface SearchBarProps{
    placeholder: string
}

function SearchBar({placeholder}: SearchBarProps) {
  return (
    <div className='flex border rounded-full px-3 items-center justify-between'>
        <Input placeholder={placeholder} className='border-none focus:border-none px-0 m-0'/>
        <Search />
    </div>
  )
}

export default SearchBar