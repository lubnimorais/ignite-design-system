import { ComponentProps, ElementType, ReactNode } from 'react';

import * as TooltipRadix from '@radix-ui/react-tooltip';
import { TooltipArrow, TooltipContent } from './styles';

export interface ITooltipProps
  extends ComponentProps<typeof TooltipRadix.Root> {
  as?: ElementType;
  content: string | ReactNode;
}

export const Tooltip = ({ content, children, ...rest }: ITooltipProps) => {
  return (
    <TooltipRadix.Provider>
      <TooltipRadix.Root {...rest}>
        <TooltipRadix.Trigger asChild>{children}</TooltipRadix.Trigger>
        <TooltipRadix.Portal>
          <TooltipContent>
            <TooltipArrow />

            {content}
          </TooltipContent>
        </TooltipRadix.Portal>
      </TooltipRadix.Root>
    </TooltipRadix.Provider>
  );
};

Tooltip.displayName = 'Tooltip';
