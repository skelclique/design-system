import { StoryObj, Meta } from '@storybook/react'
import { Toast, ToastProps } from '@ignite-ui/react'

export default {
  title: 'Surfaces/Toast',
  component: Toast,
  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h',
  },
  argTypes: {
    open: {
      defaultValue: true,
      control: {
        type: 'boolean',
      },
    },
    children: {
      control: {
        type: null,
      },
    },
  },
  tags: ['autodocs'],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
