import { styled } from '../styles';

import { ComponentProps } from 'react';

export const TextArea = styled('textarea', {
  minHeight: 80,

  backgroundColor: '$gray900',

  padding: '$3 $4',

  border: '2px solid $gray900',
  borderRadius: '$sm',

  boxSizing: 'border-box',

  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$regular',
  color: '$white',

  resize: 'vertical',

  '&:focus': {
    outline: 0,
    borderColor: '$ignite300',
  },

  '&:disabled': {
    opacity: 0.5,

    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$gray400',
  },
});

export interface ITextAreaProps extends ComponentProps<typeof TextArea> {}

TextArea.displayName = 'TextArea';
