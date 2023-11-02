// import '../../App.css';
// import { Button } from '../Button/Button';
// import './HeroSection.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import video1 from '../assets/videos/video-1.mp4';
// import video2 from '../../assets/videos/video-2.mp4';
// import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';

// export const HeroSection = () => {
//   return (
//     <div className="hero-container">
//       <video src={video2} autoPlay loop muted />
//       <h1>ADVENTURE AWAITS</h1>
//       <p>What are you waiting for?</p>
//       <div className="hero-btns">
//         <Button
//           className="btns"
//           buttonStyle="btn--outline"
//           buttonSize="btn--large"
//         >
//           GET STARTED
//         </Button>
//         <Button
//           className="btns"
//           buttonStyle="btn--primary"
//           buttonSize="btn--large"
//           onClick={() => console.log('hey')}
//         >
//           WATCH TRAILER <FontAwesomeIcon icon={faPlayCircle} />
//         </Button>
//       </div>
//     </div>
//   );
// };

import { Button } from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import video2 from '../../assets/videos/video-2.mp4';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';

import { VideoStyled, HeroContainer, HeroBtns } from './HeroSection.styles';

export const HeroSection = () => {
  return (
    <HeroContainer className="hero-container">
      <VideoStyled src={video2} autoPlay loop muted />

      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <HeroBtns>
        <Button buttonStyle="btn--outline" type="button">
          GET STARTED
        </Button>
        <Button
          type="button"
          className="btn--white-bg"
          onClick={() => console.log('hey')}
        >
          WATCH TRAILER <FontAwesomeIcon icon={faPlayCircle} />
        </Button>
      </HeroBtns>
    </HeroContainer>
  );
};
