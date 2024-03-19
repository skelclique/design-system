import { styled } from '../../styles'
import * as Toast from '@radix-ui/react-toast'

export const ToastProvider = styled(Toast.Provider, {})

export const ToastContainer = styled(Toast.Root, {
  background: '$gray800',
  border: '1px solid $gray600',
  borderRadius: '$sm',
  padding: '$3 $5',
})

export const ToastTitle = styled(Toast.Title, {
  color: '$white',
  fontWeight: '$bold',
  fontFamily: '$default',
  fontSize: '$xl',
  lineHeight: '$base',
})

export const ToastDescription = styled(Toast.Description, {
  color: '$gray200',
  fontFamily: '$default',
  fontSize: '$sm',
  marginTop: '$1',
})

export const ToastViewport = styled(Toast.Viewport, {
  listStyleType: 'none',
})

export const ToastClose = styled(Toast.Close, {
  position: 'absolute',
  right: '$5',
  color: '$gray200',
  border: '0',
  background: 'transparent',
  padding: '$1',
  cursor: 'pointer',

  svg: {
    width: '$5',
    height: '$5',
  },
})
