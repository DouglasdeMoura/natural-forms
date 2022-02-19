import { forwardRef, useEffect } from 'react'

import { FieldContextProvider, useFieldContext } from '@natural-forms/context'
import { camelCase } from 'lodash'

type RootProps = {
  children?: React.ReactNode
}

export const Root: React.FC<RootProps> = ({ children, ...props }) => (
  <FieldContextProvider>
    <div {...props}>{children}</div>
  </FieldContextProvider>
)

type InputProps = {
  custom?: (value: string) => boolean
  onError?: (name: string) => void
  onValidate?: (value?: string) => boolean
} & React.ComponentPropsWithRef<'input'>

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ ...props }, ref) => {
    const { setId, label } = useFieldContext()
    typeof props
    const id = props?.id || camelCase(label)
    const name = props?.name || id

    useEffect(() => {
      setId(id)
    }, [id, setId])

    return <input {...props} id={id} name={name} ref={ref} />
  },
)

Input.displayName = 'Input'
