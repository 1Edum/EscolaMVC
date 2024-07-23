import React, { ComponentProps } from 'react'

interface InputProps extends ComponentProps<"input">{
  text: string
}

export default function Input(props : InputProps) {
  return (
    <div className='flex flex-col text-start'>
      <label className='text-zinc-500'>{props.text}</label>
      <input className="mb-2 p-2 border rounded"/>
    </div>
  )
}
