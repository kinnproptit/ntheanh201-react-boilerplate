import React, { createContext, useEffect } from 'react'

// import environments from 'environments'
import { useState } from 'core'
import { LoadingIndicator } from 'ui'

export const PreloaderContext = createContext()

export const Preloader = ({ children }) => {
  const [state, setState] = useState({
    loading: true,
    isLoggedIn: false
  })

  useEffect(() => {
  }, [])

  if (state.loading) {
    return <LoadingIndicator />
  }

  const props = {
    ...state
  }

  return (
    <PreloaderContext.Provider value={props}>
      {children}
    </PreloaderContext.Provider>
  )
}
