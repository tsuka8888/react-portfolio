import { ReactNode } from 'react';
import { Title } from './Title';

interface ContentsProps {
  children: ReactNode;
  title?: string;
}

export const Contents = ({ children, title }: ContentsProps) => (
  <div className="contents">
    {title && <Title>{title}</Title>}
    {children}
  </div>
);
