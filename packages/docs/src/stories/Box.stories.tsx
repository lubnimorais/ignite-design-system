import type { StoryObj, Meta } from '@storybook/react';

import { Box, IBoxProps } from '@ignite-ui/react';

export default {
  title: 'Surfaces/Box',
  component: Box,

  // são as propriedades
  args: {
    children: (
      <>
        <span>Testando o elemento Box</span>
      </>
    ),
  },
} as Meta<IBoxProps>;

export const Primary: StoryObj<IBoxProps> = {};
