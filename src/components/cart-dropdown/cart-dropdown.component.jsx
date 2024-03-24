import { useContext } from 'react';
import { CartContext } from '../../contexts/shopping-cart.context';
import Button from '../button/button.component';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';

const CartDropDown = () => {
    const {productsInCart} = useContext(CartContext);

    return (
        <div className="cart-dropdown-container">
            {
                productsInCart.length ?
                    <div className="cart-items">
                        {
                            productsInCart.map((product)=>{
                                return <CartItem key={product.id} product={product}/>
                            })
                        }
                    </div>
                :
                <span className='empty-message'>You have not added anything to the cart.</span>
            }
            <Button buttonType={"inverted"}>GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropDown;