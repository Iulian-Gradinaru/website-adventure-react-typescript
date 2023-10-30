import { styled } from '@mui/system';
import { NavLinkProps, MenuIconProps } from './NavBar.types';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled('nav')(({ theme }) => ({
  background:
    'linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%)',
  height: 80,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 19,
  position: 'sticky',
  top: 0,
  zIndex: 999,
  [theme.breakpoints.down('md')]: {
    justifyContent: 'flex-start',
  },
}));

export const NavbarContent = styled('div')(({}) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 80,
  maxWidth: 1500,
}));

export const NavbarLogo = styled(Link)(({ theme }) => ({
  color: '#fff',
  justifyContent: 'flex-start',
  marginLeft: 20,
  cursor: 'pointer',
  textDecoration: 'none',
  fontSize: 32,
  display: 'flex',
  alignItems: 'center',
  '& .fa-typo3': {
    marginLeft: 8,
    fontSize: 29,
  },
  [theme.breakpoints.down('md')]: {
    marginLeft: 50,
  },
}));

export const NavMenu = styled('ul')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, auto)',
  gridGap: 10,
  listStyle: 'none',
  textAlign: 'center',
  width: '60vw',
  justifyContent: 'end',
  marginRight: 32,
  transition: 'left 0.3s ease-out',

  [theme.breakpoints.down('md')]: {
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '90vh',
    position: 'absolute',
    top: 80,
    left: '-100%',
    opacity: 1,
    background: '#242222',
    zIndex: 1,
    '&.active': {
      left: 0,
      opacity: 1,
    },
  },
}));

export const NavItem = styled('li')({
  height: 80,
});

export const NavLink = styled(Link)<NavLinkProps>(({ theme }) => ({
  color: '#fff',
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  padding: '8px 16px',
  height: '100%',
  '&:hover': {
    borderBottom: '4px solid #fff',
    transition: 'all 0.2s ease-out',
  },
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
    padding: 32,
    width: '100%',
    display: 'table',
    '&:hover': {
      backgroundColor: '#fff',
      color: '#242424',
      borderRadius: 0,
    },
  },
}));

export const MenuIcon = styled('div')<MenuIconProps>(({ theme }) => ({
  display: 'none',
  color: 'white',
  [theme.breakpoints.down('md')]: {
    display: 'block',
    position: 'absolute',
    top: 0,
    right: 0,
    transform: 'translate(-100%, 60%)',
    fontSize: 29,
    cursor: 'pointer',
    '& .fa-times': {
      color: '#fff',
      fontSize: 32,
    },
  },
}));

export const NavLinksMobile = styled(Link)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('md')]: {
    display: 'block',
    textAlign: 'center',
    margin: '32px auto',
    borderRadius: 4,
    width: '80%',
    textDecoration: 'none',
    fontSize: 24,
    backgroundColor: 'transparent',
    color: '#fff',
    padding: '14px 20px',
    border: '1px solid #fff',
    transition: 'all 0.3s ease-out',
    '&:hover': {
      background: '#fff',
      color: '#242424',
      transition: '250ms',
    },
  },
}));

export const FaBars = styled('i')({
  color: '#fff',
});
