import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

export const CardsItems = styled('ul')(({ theme }) => ({
  marginBottom: '24px',
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

export const CardsItem = styled('li')(({ theme }) => ({
  display: 'flex',
  flex: 1,
  margin: '0 1rem',
  borderRadius: '10px',
  [theme.breakpoints.down('md')]: {
    marginBottom: '2rem',
  },
}));

export const CardsItemLink = styled(Link)({
  display: 'flex',
  flexFlow: 'column',
  width: '100%',
  boxShadow: '0 6px 20px rgba(56, 125, 255, 0.17)',
  borderRadius: '10px',
  overflow: 'hidden',
  textDecoration: 'none',
});

export const CardsItemPicWrap = styled('figure')({
  position: 'relative',
  width: '100%',
  padding: '40% 0',
  overflow: 'hidden',
  '&::after': {
    content: 'attr(data-category)',
    position: 'absolute',
    bottom: 0,
    marginLeft: '10px',
    padding: '6px 8px',
    maxWidth: 'calc(100% - 60px)',
    fontSize: '12px',
    fontWeight: 700,
    color: '#fff',
    backgroundColor: '#1f98f4',
  },
});

export const CardsItemImg = styled('img')({
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  display: 'block',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'all 0.4s ease-in-out',
  '&:hover': {
    transform: 'scale(1.1)',
  },
});

export const CardsItemInfo = styled('div')({
  padding: '20px 30px 30px',
});

export const CardsItemText = styled('h5')({
  color: '#252e48',
  fontSize: '18px',
  lineHeight: '24px',
});
