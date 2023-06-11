import type { StoryObj, Meta } from '@storybook/react';

import { TextInput, ITextInputProps, Box, Text } from '@ignite-ui/react';

export default {
  title: 'Form/Text Input',
  component: TextInput,

  // são as propriedades
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Email address</Text>
          {Story()}
        </Box>
      );
    },
  ],
} as Meta<ITextInputProps>;

export const Primary: StoryObj<ITextInputProps> = {
  args: {
    placeholder: 'Type or name',
  },
};

export const Disabled: StoryObj<ITextInputProps> = {
  args: {
    disabled: true,
  },
};

export const WithPrefix: StoryObj<ITextInputProps> = {
  args: {
    prefix: 'cal.com',
  },
};
