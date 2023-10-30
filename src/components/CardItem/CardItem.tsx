import { CardItemProps } from './CardItem.types';
import {
  CardsItem,
  CardsItemLink,
  CardsItemPicWrap,
  CardsItemImg,
  CardsItemInfo,
  CardsItemText,
} from './CardItem.styles';

export const CardItem = (props: CardItemProps) => {
  const { path, label, src, text } = props;

  return (
    <CardsItem className="cards-item">
      <CardsItemLink className="cards-item-link" to={path}>
        <CardsItemPicWrap className="card-items-pic-wrap" data-category={label}>
          <CardsItemImg
            className="cards-item-img"
            alt="Travel Image"
            src={src}
          />
        </CardsItemPicWrap>
        <CardsItemInfo className="cards-item-info">
          <CardsItemText className="cards-item-text">{text}</CardsItemText>
        </CardsItemInfo>
      </CardsItemLink>
    </CardsItem>
  );
};

// import { Link } from 'react-router-dom';
// import { CardItemProps } from './CardItem.types';
// export const CardItem = (props: CardItemProps) => {
//   return (
//     <>
//       <li className="cards__item">
//         <Link className="cards__item__link" to={props.path}>
//           <figure className="cards__item__pic-wrap" data-category={props.label}>
//             <img
//               className="cards__item__img"
//               alt="Travel Image"
//               src={props.src}
//             />
//           </figure>
//           <div className="cards__item__info">
//             <h5 className="cards__item__text">{props.text}</h5>
//           </div>
//         </Link>
//       </li>
//     </>
//   );
// };

// export default CardItem;
