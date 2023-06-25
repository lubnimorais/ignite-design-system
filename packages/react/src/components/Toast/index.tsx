import { ComponentProps, ElementType } from 'react';

import { X } from 'phosphor-react';

import * as ToastRadix from '@radix-ui/react-toast';

import {
  ToastClose,
  ToastDescription,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from './styles';

export interface IToastProps extends ComponentProps<typeof ToastRoot> {
  as?: ElementType;
  title: string;
  description?: string;
}

export const Toast = ({ title, description, ...rest }: IToastProps) => {
  return (
    <ToastRadix.Provider>
      <ToastRoot {...rest}>
        <ToastTitle>{title}</ToastTitle>

        {description && <ToastDescription>{description}</ToastDescription>}

        <ToastClose>
          <X weight="light" size={20} />
        </ToastClose>
      </ToastRoot>

      <ToastViewport />
    </ToastRadix.Provider>
  );
};

Toast.displayName = 'Toast';
