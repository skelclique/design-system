import { Text } from '../Text'
import {
  TooltipArrow,
  TooltipContainer,
  TooltipContent,
  TooltipPortal,
  TooltipProvider,
  TooltipTrigger,
} from './styles'
import { ComponentProps } from 'react'

export type TooltipProps = ComponentProps<typeof TooltipTrigger> & {
  description: string
}

export function Tooltip({ children, description }: TooltipProps) {
  return (
    <TooltipProvider>
      <TooltipContainer>
        <TooltipTrigger asChild>
          <Text color="$white">{children}</Text>
        </TooltipTrigger>
        <TooltipPortal>
          <TooltipContent sideOffset={2}>
            <TooltipArrow />
            {description}
          </TooltipContent>
        </TooltipPortal>
      </TooltipContainer>
    </TooltipProvider>
  )
}

Tooltip.displayName = 'Tooltip'
