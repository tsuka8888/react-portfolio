import { ReactNode } from 'react';
import { Title } from './Title';

interface TitleBackgroundProps {
  children: ReactNode;
  variant?: 'small' | 'large';
}

export const TitleBackground = ({
  children,
  variant = 'small',
}: TitleBackgroundProps) => (
  <div className="title-background">
    <div className={`title-background-background ${variant}`} />
    <div className="title-background-title">{children}</div>
  </div>
);
