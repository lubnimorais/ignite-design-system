import type { StoryObj, Meta } from '@storybook/react';

import { Text, ITextProps } from '@lubni-ignite-ui/react';

export default {
  title: 'Typography/Text',
  component: Text,
  tags: ['autodocs'],

  // são as propriedades
  args: {
    size: 'md',
    children:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae ratione nostrum ipsa vero, quis nesciunt itaque distinctio nulla ut veritatis alias aperiam nihil repellendus ex eius quam, unde totam doloremque.',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<ITextProps>;

export const Primary: StoryObj<ITextProps> = {};

export const CustomTag: StoryObj<ITextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
};
