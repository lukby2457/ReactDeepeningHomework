import React from 'react'

const Layout = ({ children }) => {
  return (
    <div>
      <header>Layout</header>
      <main>{children}</main>
    </div>
  )
}

export default Layout