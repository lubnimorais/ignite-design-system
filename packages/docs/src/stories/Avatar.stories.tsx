import type { StoryObj, Meta } from '@storybook/react';

import { Avatar, IAvatarProps } from '@ignite-ui/react';

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  tags: ['autodocs'],

  // são as propriedades
  args: {
    src: 'https://github.com/lubnimorais.png',
    alt: 'Lubni Morais',
  },
} as Meta<IAvatarProps>;

export const Primary: StoryObj<IAvatarProps> = {};

export const WithFallback: StoryObj<IAvatarProps> = {
  args: {
    src: undefined,
  },
};
