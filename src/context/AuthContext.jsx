import React, { Children } from 'react'

function AuthContext({children}) {
  return (
    <div>{children}</div>
  )
}

export default AuthContext