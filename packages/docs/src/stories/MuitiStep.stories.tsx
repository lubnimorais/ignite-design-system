import type { StoryObj, Meta } from '@storybook/react';

import { MultiStep, IMultiStepProps, Box } from '@lubni-ignite-ui/react';

export default {
  title: 'Form/MultiStep',
  component: MultiStep,
  tags: ['autodocs'],

  // são as propriedades
  args: {
    size: 4,
    currentStep: 1,
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          {Story()}
        </Box>
      );
    },
  ],
} as Meta<IMultiStepProps>;

export const Primary: StoryObj<IMultiStepProps> = {
  args: {},
};

export const Full: StoryObj<IMultiStepProps> = {
  args: {
    currentStep: 4,
  },
};
