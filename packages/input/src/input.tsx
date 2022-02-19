import { forwardRef, useEffect } from 'react'

import { Root as RootComponent, useFieldContext } from '@natural-forms/context'
import { Error as ErrorComponent } from '@natural-forms/error'
import { Label as LabelComponent } from '@natural-forms/label'
import { camelCase } from 'lodash'

type InputProps = {
  custom?: (value: string) => boolean
  onError?: (name: string) => void
  onValidate?: (value?: string) => boolean
} & React.ComponentPropsWithRef<'input'>

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ ...props }, ref) => {
    const { setId, label } = useFieldContext()

    const id = props?.id || camelCase(label)
    const name = props?.name || id

    useEffect(() => {
      setId(id)
    }, [id, setId])

    return <input {...props} id={id} name={name} ref={ref} />
  },
)

Input.displayName = 'Input'

export const Label = LabelComponent

export const Error = ErrorComponent

export const Root = RootComponent
