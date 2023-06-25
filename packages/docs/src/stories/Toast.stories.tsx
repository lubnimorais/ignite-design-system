import { useEffect, useRef, useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Button, IToastProps, Toast } from '@lubni-ignite-ui/react';

const ToastComponent = (props: IToastProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const timerRef = useRef(0);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <div>
      <Button
        onClick={() => {
          setIsOpen(false);
          window.clearTimeout(timerRef.current);
          timerRef.current = window.setTimeout(() => {
            setIsOpen(true);
          }, 500);
        }}
      >
        Agendar
      </Button>

      <Toast open={isOpen} onOpenChange={setIsOpen} {...props} />
    </div>
  );
};

export default {
  title: 'Form/Toast',
  component: ToastComponent,
  args: {
    title: 'Agendamento realizado',
    description: 'Segunda-feira 26 de junho às 15h',
  },
} as Meta<IToastProps>;

export const Primary: StoryObj<IToastProps> = {};
