import { createContext, useContext, useState } from 'react'

type FieldContextData = {
  id: string
  setId: (id: string) => void
}

type FieldContextProviderProps = {
  children: React.ReactNode
}

const FieldContext = createContext({} as FieldContextData)

export const FieldContextProvider: React.FC<FieldContextProviderProps> = ({
  children,
}) => {
  const [id, setId] = useState('')

  return (
    <FieldContext.Provider value={{ id, setId }}>
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
