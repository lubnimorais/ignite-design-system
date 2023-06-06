import { ComponentProps, ElementType } from 'react';
import { styled } from '../styles';

export const Box = styled('div', {
  padding: '$4',

  border: '1px solid $gray600',
  borderRadius: '$md',

  backgroundColor: '$gray800',
});

export interface IBoxProps extends ComponentProps<typeof Box> {
  as?: ElementType;
}
