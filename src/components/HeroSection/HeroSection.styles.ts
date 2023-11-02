import { styled } from '@mui/material/styles';

export const VideoStyled = styled('video')({
  objectFit: 'cover',
  width: '100%',
  height: '100%',
  position: 'fixed',
  zIndex: -1,
});

export const HeroContainer = styled('div')(({ theme }) => ({
  height: '100vh',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: 'inset 0 0 0 1000px rgba(0, 0, 0, 0.2)',
  objectFit: 'contain',
  [theme.breakpoints.down('md')]: {
    marginLeft: 20,
  },
  '& > h1': {
    color: '#fff',
    fontSize: 100,
    marginTop: -100,

    [theme.breakpoints.down('lg')]: {
      fontSize: 90,
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 70,
      marginTop: -150,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 50,
      marginTop: 0,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 40,
      marginTop: 0,
    },
  },

  '& > p': {
    marginTop: 8,
    color: '#fff',
    fontSize: 32,
    fontFamily:
      "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",

    [theme.breakpoints.down('lg')]: {
      fontSize: 30,
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 28,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 26,
      marginTop: 0,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 24,
      marginTop: 0,
    },
  },
}));

export const HeroBtns = styled('div')({
  marginTop: 32,

  '& .btn': {
    margin: 6,
    padding: '12px 26px',
    fontSize: 20,
  },
  '& .btn--white-bg': {
    backgroundColor: 'white !important',
  },
  '& .fa-play-circle': {
    marginLeft: 4,
  },
});
