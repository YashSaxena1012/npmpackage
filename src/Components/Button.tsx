import * as React from 'react'
import { ReactNode } from 'react'

type PropsType={children:ReactNode}
const Button = ({children}:PropsType) => {
  return (
    <button style={{backgroundColor:"black",color:"white",padding:"10px 20px",cursor:"pointer"}}>{children}</button>
  )
}


export  {Button}