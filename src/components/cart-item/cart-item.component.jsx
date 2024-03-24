
const CartItem = (product) =>{
    const {name,imageUrl} = product;
    return (
        <div className="cart-item-container">
            <img src={imageUrl} alt={name} />
            <div className="item-details">
                <span className="name">{name}</span>
            </div>
        </div>
    )
}

export default CartItem;