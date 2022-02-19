import { createContext, useContext, useState } from 'react'

type FieldContextData = {
  id: string
  label: string
  setId: (id: string) => void
  setLabel: (label: string) => void
}

type RootProps = {
  children: React.ReactNode
}

const FieldContext = createContext({} as FieldContextData)

export const Root: React.FC<RootProps> = ({ children }) => {
  const [id, setId] = useState('')
  const [label, setLabel] = useState('')

  return (
    <FieldContext.Provider value={{ id, label, setId, setLabel }}>
      {children}
    </FieldContext.Provider>
  )
}

export const useFieldContext = () => {
  const context = useContext(FieldContext)

  if (context === undefined) {
    throw new Error(
      'useFieldContext must be used within a FieldContextProvider',
    )
  }

  return context
}
