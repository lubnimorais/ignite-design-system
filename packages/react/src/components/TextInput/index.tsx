import { ComponentProps } from 'react';
import { Input, Prefix, TextInputContainer } from './styles';

export interface ITextInputProps extends ComponentProps<typeof Input> {
  prefix?: string;
}

export const TextInput = ({ prefix, ...rest }: ITextInputProps) => {
  return (
    <TextInputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input {...rest} />
    </TextInputContainer>
  );
};
