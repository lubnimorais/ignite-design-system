import * as Tooltip from '@radix-ui/react-tooltip';
import { styled } from '../../styles';

export const TooltipContent = styled(Tooltip.Content, {
  background: '$gray900',

  padding: '$3 $4',

  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$medium',
  color: '$gray100',

  borderRadius: '$xs',

  filter: 'drop-shadow(4px 16px 24px rgba(0, 0, 0, 0.25))',
});

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
});
