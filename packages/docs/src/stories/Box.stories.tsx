import type { StoryObj, Meta } from '@storybook/react';

import { Box, IBoxProps, Text } from '@ignite-ui/react';

export default {
  title: 'Surfaces/Box',
  component: Box,

  // são as propriedades
  args: {
    children: <Text>Testando o elemento Box</Text>,
  },
} as Meta<IBoxProps>;

export const Primary: StoryObj<IBoxProps> = {};
