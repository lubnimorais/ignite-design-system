import { ComponentProps } from 'react';

import { User } from 'phosphor-react';

import { AvatarContainer, AvatarFallback, AvatarImage } from './styles';

export interface IAvatarProps extends ComponentProps<typeof AvatarImage> {}

export function Avatar({ ...props }: IAvatarProps) {
  return (
    <AvatarContainer>
      <AvatarImage {...props} />

      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  );
}

Avatar.displayName = 'Avatar';
