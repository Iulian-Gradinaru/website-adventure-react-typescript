// import { useState, useEffect } from 'react';
// import { Button } from '../Button';
// import { Link } from 'react-router-dom';
// import './Navbar.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
// import { faTypo3 } from '@fortawesome/free-brands-svg-icons';

// export const Navbar = () => {
//   const [click, setClick] = useState(false);
//   const [button, setButton] = useState(true);

//   const handleClick = () => setClick(!click);
//   const closeMobileMenu = () => setClick(false);

//   const showButton = () => {
//     if (window.innerWidth <= 960) {
//       setButton(false);
//     } else {
//       setButton(true);
//     }
//   };

//   useEffect(() => {
//     showButton();
//   }, []);

//   window.addEventListener('resize', showButton);

//   return (
//     <>
//       <nav className="navbar">
//         <div className="navbar-container">
//           <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
//             TRVL
//             <FontAwesomeIcon icon={faTypo3} />
//           </Link>
//           <div className="menu-icon" onClick={handleClick}>
//             <FontAwesomeIcon icon={click ? faTimes : faBars} />
//           </div>
//           <ul className={click ? 'nav-menu active' : 'nav-menu'}>
//             <li className="nav-item">
//               <Link to="/" className="nav-links" onClick={closeMobileMenu}>
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
//                 to="/services"
//                 className="nav-links"
//                 onClick={closeMobileMenu}
//               >
//                 Services
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
//                 to="/products"
//                 className="nav-links"
//                 onClick={closeMobileMenu}
//               >
//                 Products
//               </Link>
//             </li>

//             <li>
//               <Link
//                 to="/sign-up"
//                 className="nav-links-mobile"
//                 onClick={closeMobileMenu}
//               >
//                 Sign Up
//               </Link>
//             </li>
//           </ul>
//           {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
//         </div>
//       </nav>
//     </>
//   );
// };

import { useState, useEffect } from 'react';
import { Button } from '../Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import { faTypo3 } from '@fortawesome/free-brands-svg-icons';
import {
  NavbarContainer,
  NavbarContent,
  NavbarLogo,
  NavMenu,
  NavItem,
  NavLink,
  MenuIcon,
  NavLinksMobile,
} from './NavBar.styles';

export const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const navigate = useNavigate(); // Noua metodă de navigare

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => {
    setClick(false);

    if (window.location.pathname !== '/') {
      navigate('/');
    }
  };

  const showButton = () => {
    if (window.innerWidth <= 899) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <NavbarContainer className="navbar-container">
      <NavbarContent className="navbar-content">
        <NavbarLogo
          className="navbar-logo"
          as={Link}
          to="/"
          onClick={closeMobileMenu}
        >
          TRVL
          <FontAwesomeIcon icon={faTypo3} />
        </NavbarLogo>
        <MenuIcon onClick={handleClick}>
          <FontAwesomeIcon icon={click ? faTimes : faBars} />
        </MenuIcon>
        <NavMenu className={click ? 'active' : ''}>
          <NavItem>
            <NavLink as={Link} to="/" onClick={closeMobileMenu}>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink as={Link} to="/services" onClick={closeMobileMenu}>
              Services
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink as={Link} to="/products" onClick={closeMobileMenu}>
              Products
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLinksMobile
              className="nav-link-mobile"
              as={Link}
              to="/sign-up"
              onClick={closeMobileMenu}
            >
              Sign Up
            </NavLinksMobile>
          </NavItem>
        </NavMenu>

        {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
      </NavbarContent>
    </NavbarContainer>
  );
};
