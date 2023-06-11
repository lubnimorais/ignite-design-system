import { Label, MultiStepContainer, Step, Steps } from './styles';

export interface IMultiStepProps {
  size: number;
  currentStep?: number;
}

export const MultiStep = ({ size, currentStep = 1 }: IMultiStepProps) => {
  return (
    <MultiStepContainer>
      <Label>
        Passo {currentStep} de {size}
      </Label>

      <Steps css={{ '--steps-size': size }}>
        {/* No segundo parâmetro do from o parâmetro é o conteúdo e o segundo é o índice */}
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => {
          return <Step key={step} active={currentStep >= step} />;
        })}
      </Steps>
    </MultiStepContainer>
  );
};

MultiStep.displayName = 'MultiSep';
