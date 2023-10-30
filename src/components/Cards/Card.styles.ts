import { styled } from '@mui/system';

export const StyledCards = styled('div')({
  padding: '4rem',
  background: '#fff',
});

export const StyledH1 = styled('h1')({
  textAlign: 'center',
});
export const CardsContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexFlow: 'column',
  alignItems: 'center',
  maxWidth: '1120px',
  width: '90%',
  margin: '0 auto',
  [theme.breakpoints.up('md')]: {
    width: '84%',
  },
}));

export const CardsWrapper = styled('div')({
  position: 'relative',
  margin: '50px 0 45px',
});
