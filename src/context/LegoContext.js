import React, { useState, useEffect } from 'react'

export const LegoContext = React.createContext()

const LegoProvider = ({children}) => {
  return (
    <LegoContext.Provider
      value={{
           chosenSet,
           setChosenSet,
           chosenTheme
           setChosenTheme,
           toggleOwn,
           ownedSets
          }}>
            {children}
    </LegoContext.Provider>
  )
}

export default LegoProvider
