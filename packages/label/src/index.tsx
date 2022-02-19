import { useFieldContext } from '@natural-forms/context'

type LabelProps = React.HTMLAttributes<HTMLLabelElement>

export const Label: React.FC<LabelProps> = ({ children, ...props }) => {
  const { id } = useFieldContext()

  return (
    <label htmlFor={id} {...props}>
      {children}
    </label>
  )
}
