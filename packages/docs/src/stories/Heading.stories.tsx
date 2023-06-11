import type { StoryObj, Meta } from '@storybook/react';

import { Heading, IHeadingProps } from '@ignite-ui/react';

export default {
  title: 'Typography/Heading',
  component: Heading,
  tags: ['autodocs'],

  // são as propriedades
  args: {
    size: 'md',
    children: 'Custom title',
  },
  argTypes: {
    size: {
      options: [' sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<IHeadingProps>;

export const Primary: StoryObj<IHeadingProps> = {};

export const CustomTag: StoryObj<IHeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as`',
      },
    },
  },
};
