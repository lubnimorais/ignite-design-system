import { CheckboxContainer, CheckboxIndicator } from './styles';

import { ComponentProps } from 'react';
import { Check } from 'phosphor-react';

export interface ICheckboxProps
  extends ComponentProps<typeof CheckboxContainer> {}

export const Checkbox = (props: ICheckboxProps) => {
  return (
    <CheckboxContainer {...props}>
      <CheckboxIndicator asChild>
        <Check weight="bold" />
      </CheckboxIndicator>
    </CheckboxContainer>
  );
};

Checkbox.displayName = 'Checkbox';
