import { ReactNode, useEffect, useState } from 'react';
import Badge from './Badge';
import StarRating from './StarRating';
import no_image from 'assets/images/no_img.png';
// import Popup from './Popup';
import './style.css';
import { Link } from 'react-router-dom';

interface IProductCardProps {
  id?: string;
  shadow?: boolean;
  imgUrl?: string;
  name?: string;
  clsName?: string;
  discount?: number;
  newArrival?: boolean;
  grey?: boolean;
  bottom?: boolean;
  price?: number;
  starRating?: number;
  oldPrice?: number;
  children?: ReactNode;
}

const ProductCard = (props: IProductCardProps) => {
  const [imgUrl, setImgUrl] = useState<string>('');

  useEffect(() => {
    setTimeout(() => {
      if (props.imgUrl) setImgUrl(props.imgUrl);
      else setImgUrl(no_image);
    }, 10000);
  }, [props.imgUrl]);

  return (
    <Link
      to={`product/${props.id}?name=${props.name}`}
      className={`cardpage ${props.clsName} ${props.shadow && 'box-shadow'}`}
    >
      <div className="cardpage-body">
        <div className="cardpage-body_badge">
          {props.discount && <Badge />}
          {props.newArrival && <Badge />}
        </div>
        <img src={imgUrl} alt={props.name} width="270" height="360" />
        {/* <Popup clsName="popup" /> */}
      </div>
      <div className={`cardpage-footer ${props.bottom && 'mb-4'} ${props.grey && 'bgc-grey'}`}>
        <StarRating starRating={props.starRating} />
        <p>{props.name}</p>
        <div className="footer-price">
          <span className="price-new">${props.price}.00</span>
          {props.oldPrice ? <span className="price-old">$90.00</span> : null}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;