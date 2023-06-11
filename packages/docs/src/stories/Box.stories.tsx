import type { StoryObj, Meta } from '@storybook/react';

import { Box, IBoxProps, Text } from '@ignite-ui/react';

export default {
  title: 'Surfaces/Box',
  component: Box,
  tags: ['autodocs'],

  // são as propriedades
  args: {
    children: <Text>Testando o elemento Box</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<IBoxProps>;

export const Primary: StoryObj<IBoxProps> = {};
