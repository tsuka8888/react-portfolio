import { Title } from "./Title";
import { TitleBackground } from "./TitleBackground";

export interface MenuProps {
  children: string;
  link?: string;
}

export const Menu = ({ children, link }: MenuProps) => (
  <div className="menu">
    <TitleBackground variant="small">
      <Title>{children}</Title>
    </TitleBackground>
  </div>
);
