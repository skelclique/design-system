import { ComponentProps } from 'react'
import {
  ToastClose,
  ToastContainer,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from './styles'

import { X } from 'phosphor-react'

export type ToastProps = ComponentProps<typeof ToastContainer> & {
  title: string
  description: string
  open: boolean
}

export function Toast({ title, description, open, ...props }: ToastProps) {
  return (
    <ToastProvider {...props}>
      <ToastContainer open={open}>
        <ToastClose>
          <X />
        </ToastClose>
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription>{description}</ToastDescription>
      </ToastContainer>
      <ToastViewport />
    </ToastProvider>
  )
}

Toast.displayName = 'Toast'
