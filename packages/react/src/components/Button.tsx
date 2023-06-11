import { ComponentProps, ElementType } from 'react';
import { styled } from '../styles';

export const Button = styled('button', {
  minWidth: 120,

  boxSizing: 'border-box',

  // TIRA TODAS A PROPRIEDADES PADRÕES DO BUTTON
  all: 'unset',

  borderRadius: '$sm',

  padding: '0 $4',

  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$medium',
  textAlign: 'center',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',

  sgv: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      primary: {
        background: '$ignite500',

        color: '$white',

        '&:not(:disabled):hover': {
          background: '$ignite300',
        },

        '&:disabled': {
          backgroundColor: '$gray200',
        },
      },

      secondary: {
        color: '$ignite300',

        border: '2px solid $ignite500',

        '&:not(:disabled):hover': {
          background: '$ignite500',

          color: '$white',
        },

        '&:disabled': {
          color: '$gray200',

          borderColor: '$gray200',
        },
      },

      tertiary: {
        color: '$gray100',

        '&:not(:disabled):hover': {
          color: '$white',
        },

        '&:disabled': {
          color: '$gray600',
        },
      },
    },

    size: {
      sm: {
        height: 38,
      },

      md: {
        height: 46,
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

export interface IButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType;
}

Button.displayName = 'Button';
