// ELE HERDA, EXTRAI QUAIS SÃO AS PROPRIEDADES QUE UM COMPONENTE PODE TER NATIVAMENTE
import { ComponentProps } from 'react';

import { styled } from './styles';

export const Button = styled('button', {
  fontFamily: '$default',
  fontWeight: 'bold',
  color: '$white',

  backgroundColor: '$ignite300',

  border: 0,
  borderRadius: '$sm',

  // VARIAÇÕES QUE O BOTÃO PODE TER
  variants: {
    size: {
      small: {
        fontSize: 14,

        padding: '$2 $4',
      },
      big: {
        fontSize: 16,

        padding: '$3 $6',
      },
    },
  },

  // QUAL É A VARIAÇÃO PADRÃO
  defaultVariants: {
    size: 'small',
  },
});

export type IButtonProps = ComponentProps<typeof Button>;
