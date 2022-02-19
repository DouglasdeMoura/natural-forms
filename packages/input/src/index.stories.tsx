import { ComponentStory, ComponentMeta } from '@storybook/react'

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

export default {
  title: 'Input',
  component: Input,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Input',
}
