import { useEffect } from 'react'

import { useFieldContext } from '@natural-forms/context'

type LabelProps = {
  children: React.ReactNode
} & React.HTMLAttributes<HTMLLabelElement>

export const Label: React.FC<LabelProps> = ({ children, ...props }) => {
  const { id, setLabel } = useFieldContext()

  useEffect(() => {
    setLabel(children?.toString() || '')
  }, [children, setLabel])

  return (
    <label htmlFor={id} {...props}>
      {children}
    </label>
  )
}
