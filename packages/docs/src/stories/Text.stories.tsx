import type { StoryObj, Meta } from '@storybook/react';

import { Text, ITextProps } from '@ignite-ui/react';

export default {
  title: 'Typography/Text',
  component: Text,

  // são as propriedades
  args: {
    children:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae ratione nostrum ipsa vero, quis nesciunt itaque distinctio nulla ut veritatis alias aperiam nihil repellendus ex eius quam, unde totam doloremque.',
  },
} as Meta<ITextProps>;

export const Primary: StoryObj<ITextProps> = {};

export const CustomTag: StoryObj<ITextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
};
