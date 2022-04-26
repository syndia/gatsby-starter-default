import React, { useState, useEffect } from 'react'

export const LegoContext = React.createContext()

const LegoProvider = ({children}) => {
  const [chosenSet, setChosenSet] = useState({})
  const [chosenTheme, setChosenTheme] = useState('')
  const [ownedSets, setOwnedSets] = useState([])

  useEffect(() => {
    const ownedStorageSets = JSON.parse(localStorage.getItem('ownedLegoSets'))
    if (ownedStorageSets) {
      setOwnedSets(ownedStorageSets)
    }

    const chosenStorageTheme = localStorage.getItem('chosenStorageTheme')
    if (chosenStorageTheme) {
      setChosenTheme(chosenStorageTheme)
    }

    const chosenSetStorage = JSON.parse(localStorage.getItem('chosenSetStorage'))
    if (chosenSetStorage) {
      setChosenSet(chosenSetStorage)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('ownedLegoSets', JSON.stringify(likedSets))

    localStorage.setItem('chosenStorageTheme', chosenTheme)

    localStorage.setItem('chosenSetStorage', JSON.stringify(chosenSet))
  }, [ownedSets, chosenTheme, chosenSet])

  const toggleOwned = (setNum) => {
    const index = ownedSets.indexOf(setNum)
    if (index > -1) {
      ownedSets.splice(index, 1)
      setOwnedSets([...ownedSets])
    } else {
      setOwnedSets([...ownedSets, setNum])
    }
  }

  return (
    <LegoContext.Provider
      value={{
           chosenSet,
           setChosenSet,
           chosenTheme,
           setChosenTheme,
           toggleOwned,
           ownedSets
          }}>
            {children}
    </LegoContext.Provider>
  )
}

export default LegoProvider
