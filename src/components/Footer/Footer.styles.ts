import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

export const FooterContainer = styled('div')(({}) => ({
  backgroundColor: '#242424',
  padding: '4rem 0 2rem 0',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const FooterSubscription = styled('section')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  marginBottom: '24px',
  padding: '24px',
  color: '#fff',
  '& > p': {
    fontFamily:
      "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
  },
  '& .footer-subscription-heading': {
    marginBottom: '24px',
    fontSize: '24px',
  },
  '& .footer-subscription-text': {
    marginBottom: '24px',
    fontSize: '20px',
  },
  '& .footer-input': {
    padding: '8px 20px',
    borderRadius: '2px',
    marginRight: '10px',
    outline: 'none',
    fontSize: '18px',
    marginBottom: '16px',
    border: '1px solid #fff',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
}));

export const FooterLinks = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: '1000px',
  display: 'flex',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    paddingTop: '2rem',
  },
  [theme.breakpoints.down('sm')]: {
    paddingLeft: 60,
  },
}));

export const ResponsiveHeader = styled('h2')(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    maxWidth: '70px',
  },
}));

export const FooterLinkWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

export const FooterLinkItems = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  margin: '16px',
  textAlign: 'left',
  width: '160px',
  boxSizing: 'border-box',
  '& h2': {
    marginBottom: '16px',
    color: '#fff',
  },
  '& a': {
    color: '#fff',
    textDecoration: 'none',
    marginBottom: '0.5rem',
    '&:hover': {
      color: '#e9e9e9',
      transition: '0.3s ease-out',
    },
  },
});

export const SocialMedia = styled('section')({
  maxWidth: '1000px',
  width: '100%',
});

export const SocialMediaWrap = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '90%',
  maxWidth: '1000px',
  margin: '40px auto 0 auto',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

export const SocialIcons = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '240px',
  '& .social-icon-link': {
    color: '#fff',
    fontSize: '24px',
  },
});

export const SocialLogo = styled(Link)({
  color: '#fff',
  justifySelf: 'start',
  marginLeft: '20px',
  cursor: 'pointer',
  textDecoration: 'none',
  fontSize: '2rem',
  display: 'flex',
  alignItems: 'center',
  marginBottom: '16px',
});

export const WebsiteRights = styled('small')({
  color: '#fff',
  marginBottom: '16px',
});
