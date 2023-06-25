import type { StoryObj, Meta } from '@storybook/react';

import { Tooltip, ITooltipProps, Button, Box } from '@lubni-ignite-ui/react';

export default {
  title: 'Form/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],

  // são as propriedades
  args: {
    children: <Button>Hover me</Button>,
    content: 'This is a tooltip',
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

            padding: '$20',

            background: '$gray500',
          }}
        >
          {Story()}
        </Box>
      );
    },
  ],
} as Meta<ITooltipProps>;

export const Primary: StoryObj<ITooltipProps> = {};
