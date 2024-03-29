import Button from "../button/button.component";
import { CartContext } from "../../contexts/shopping-cart.context";
import './product-card.styles.scss';
import { useContext } from "react";

const ProductCard = ({product}) => {
    const {name,imageUrl,price} = product;
    const {productsInCart,setProductsInCart} = useContext(CartContext);

    const addProductToCart = ()=> {

    }
    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={`${name}`}/>
            {/* <div className="button">SHOP NOW</div> */}
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType={"inverted"} onClick={addProductToCart}>ADD TO CART</Button>
        </div>
    )
}

export default ProductCard;