import { styled } from '../../styles'
import * as Tooltip from '@radix-ui/react-tooltip'

export const TooltipProvider = styled(Tooltip.Provider, {})

export const TooltipContainer = styled(Tooltip.Root, {
  borderBottomColor: '$gray900',
})

export const TooltipTrigger = styled(Tooltip.Trigger, {
  color: '$white',
  textAlign: 'center',
})

export const TooltipPortal = styled(Tooltip.Portal, {})

export const TooltipContent = styled(Tooltip.Content, {
  padding: '$3 $4',
  background: '$gray900',
  borderRadius: '$sm',

  color: '$gray100',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$medium',
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})
