import React, { useState, createContext } from "react"

interface CurrentPageInt {
  currentPage: string
  setCurrPage: (page: string) => void
  checkPage: (page: string) => boolean
}

export const CurrentPageContext = createContext({} as CurrentPageInt)
CurrentPageContext.displayName = "CurrentPage"

const CurrentPageProvider = ({ children }: PageProps) => {
  const [currentPage, setCurrentPage] = useState("Home")
  const setCurrPage: (page: string) => void = page => {
    console.log(`Changed from ${currentPage} to ${page}`)
    setCurrentPage(page)
  }
  const checkPage = (page: string) =>
    (page.localeCompare(currentPage) == 0) as boolean
  const value = { currentPage, setCurrPage, checkPage }
  return (
    <CurrentPageContext.Provider value={value}>
      {children}
    </CurrentPageContext.Provider>
  )
}

export default CurrentPageProvider
interface PageProps {
  children: React.ReactNode
}
