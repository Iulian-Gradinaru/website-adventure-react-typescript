export interface NavLinkProps {
  href?: string;
  isActive?: boolean;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

export interface MenuIconProps {
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
