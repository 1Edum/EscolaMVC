import React, {ComponentProps} from 'react'

interface ButonProps extends ComponentProps<'button'>{
    children : String
}

export default function Button(props : ButonProps) {
  return (
    <button className='text-white bg-bgprimary px-3 py-1 rounded'>
        {props.children}
    </button>
  )
}
