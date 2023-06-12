import { ReactNode } from 'react';

interface TitleProps {
  children: ReactNode;
  variant?: 'small' | 'medium' | 'large';
}

export const Title = ({ children, variant = 'small' }: TitleProps) => (
  <p className={`title ${variant}`}>{children}</p>
);
