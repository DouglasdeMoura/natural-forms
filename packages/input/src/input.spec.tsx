import { render, screen } from '@testing-library/react'

import * as InputPrimitive from '.'

type InputProps = {
  label: string
} & React.ComponentProps<typeof InputPrimitive.Input>

const Input = ({ label, ...props }: InputProps) => (
  <InputPrimitive.Root>
    <InputPrimitive.Label>{label}</InputPrimitive.Label>
    <InputPrimitive.Input {...props} />
    <InputPrimitive.Error />
  </InputPrimitive.Root>
)

describe('<InputPrimitive.* />', () => {
  it('should render with the default id, name and for attributes', () => {
    render(<Input label="mock_label" />)

    const label = screen.getByText('mock_label')
    const input = screen.getByLabelText('mock_label')

    expect(label).toBeInTheDocument()
    expect(input).toBeInTheDocument()

    expect(label).toHaveAttribute('for', 'mockLabel')
    expect(input).toHaveAttribute('id', 'mockLabel')
    expect(input).toHaveAttribute('name', 'mockLabel')
  })

  it('should pass the `id` attribute to the `for` attribute of the label', () => {
    render(<Input label="mock_label" id="mock_id" />)

    const label = screen.getByText('mock_label')

    expect(label).toHaveAttribute('for', 'mock_id')
  })
})
