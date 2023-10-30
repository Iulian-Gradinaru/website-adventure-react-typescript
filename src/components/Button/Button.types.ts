export const STYLES = ['btn--primary', 'btn--outline', 'btn--test'] as const;

export const SIZES = ['btn--medium', 'btn--large'] as const;

export interface ButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  buttonStyle?: (typeof STYLES)[number];
  buttonSize?: (typeof SIZES)[number];
  className?: string;
}
