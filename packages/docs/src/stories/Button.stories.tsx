import type { StoryObj, Meta } from '@storybook/react';

import { Button, IButtonProps } from '@ignite-ui/react';

export default {
  title: 'Button',
  component: Button,

  // são as propriedades
  args: {
    children: 'Enviar',
  },
} as Meta<IButtonProps>;

export const Primary: StoryObj<IButtonProps> = {
  // são as propriedades
  // args: {
  //   children: 'Enviar',
  // },
};

export const Big: StoryObj<IButtonProps> = {
  args: {
    size: 'big',
  },
};
