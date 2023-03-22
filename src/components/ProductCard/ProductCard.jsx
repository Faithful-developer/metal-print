import './ProductCard.scss';
import {Link} from "react-router-dom";

const ProductCard = ({id, imgLink , title, overview}) => {
    return (
        <Link to={`/product/${id}`} className="product-card">
            <img src={imgLink} alt=""/>
            <div className="body-section">
                <h3>{title}</h3>
                <p>{overview}</p>
                <button>
                    Посмотреть больше
                </button>
            </div>
        </Link>
    )
}

export default ProductCard;
