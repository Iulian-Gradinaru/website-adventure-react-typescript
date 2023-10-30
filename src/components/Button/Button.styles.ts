import { styled } from '@mui/system';

export const StylesButton = styled('button')(({}) => ({
  padding: '8px 20px',
  borderRadius: '2px',
  outline: 'none',
  border: 'none',
  cursor: 'pointer',

  '&.btn--primary': {
    backgroundColor: '#fff',
    color: '#242424',
    border: '1px solid #fff',
  },

  '&.btn--outline': {
    backgroundColor: 'transparent',
    color: '#fff',
    padding: '8px 20px',
    border: '1px solid #fff',
    transition: 'all 0.3s ease-out',
  },

  '&.btn--medium': {
    padding: '8px 20px',
    fontSize: '18px',
  },

  '&.btn--large': {
    padding: '12px 26px',
    fontSize: '20px',
  },

  '&.btn--medium:hover, &.btn--large:hover': {
    transition: 'all 0.3s ease-out',
    background: '#fff',
    color: '#242424',
    // transition: '250ms',
  },
}));
