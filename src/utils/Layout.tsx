import React from 'react'
import { ChildProps } from '../typecasting';

const Layout = ({children}: ChildProps) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default Layout
