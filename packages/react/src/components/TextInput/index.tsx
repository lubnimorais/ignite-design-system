import { ComponentProps, ElementRef, forwardRef } from 'react';
import { Input, Prefix, TextInputContainer } from './styles';

export interface ITextInputProps extends ComponentProps<typeof Input> {
  prefix?: string;
}

// No primeiro parâmetro passamos o ElementRef, porque ela extrai a tipagem de um componente
// No segundo parâmetro são as propriedades do componente

// E agora na função do componente, nos parâmetros, recebemos as props no primeiro parâmetro
// e no segundo a referência
export const TextInput = forwardRef<ElementRef<typeof Input>, ITextInputProps>(
  ({ prefix, ...rest }: ITextInputProps, ref) => {
    return (
      <TextInputContainer>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input ref={ref} {...rest} />
      </TextInputContainer>
    );
  },
);

TextInput.displayName = 'TextInput';
