import { Link } from 'react-router-dom'
import './style.css'
const Cart = ({ cart, resetCart, incrementCart, decrementCart, removeFromCart }) => {
    return (
        <div className="mt-5 pt-3">
                <h2>{!cart.length ? "Empty Cart" : "Shopping Cart"}</h2>
            <div >


                <div class="shopping-cart">

                    {cart.length > 0 && <div class="column-labels">
                        <label class="product-image">Image</label>
                        <label class="product-details">Product</label>
                        <label class="product-price">Price</label>
                        <label class="product-quantity">Quantity</label>
                        <label class="product-removal">Remove</label>
                        <label class="product-line-price">Total</label>
                    </div>}


                    {cart.map(p =>
                        <div key={p.id} class="product">
                            <div class="product-image">
                                <img src={p.variations[0].icon} />
                            </div>
                            <div class="product-details">
                                <div class="product-title">{p.title}</div>
                                <p class="product-description">The best dog bones of all time. Holy crap. Your dog will be begging for these things! I got curious once and ate one myself. I'm a fan.</p>
                            </div>
                            <div class="product-price">{p.prices[0].price}</div>
                            <div class="product-quantity">
                            <button className="btn btn-sm btn-outline-danger" onClick={() => incrementCart(p)}>+</button>
                                            {" "}{p.cartQty}{" "}
                                            <button className="btn btn-sm btn-outline-danger" onClick={() => decrementCart(p)}>-</button>
                            </div>
                            <div class="product-removal">
                                <button onClick={() => removeFromCart(p)} class="remove-product">
                                    Remove
      </button>
                            </div>
                            
                            <div class="product-line-price">{p.prices[0].price*p.cartQty}</div>
                        </div>

                    )}

                    {cart.length > 0 && <div> <div class="totals">
                        <div class="totals-item">
                            <label>Subtotal</label>
                            <div class="totals-value" id="cart-subtotal">00</div>
                        </div>
                        <div class="totals-item">
                            <label>Tax (5%)</label>
                            <div class="totals-value" id="cart-tax">00</div>
                        </div>
                        <div class="totals-item">
                            <label>Shipping</label>
                            <div class="totals-value" id="cart-shipping">00</div>
                        </div>
                        <div class="totals-item totals-item-total">
                            <label>Grand Total</label>
                            <div class="totals-value" id="cart-total">00</div>
                        </div>
                    </div>
                        <Link to="/thankyou" class="checkout text-decoration-none">Checkout</Link>
                        <button class="checkout bg-danger mx-1" onClick={() => resetCart()}>Reset</button></div>}

                </div>







                {/* old way------------------------------------------------------------------------- */}
                {/* <div className="container text-center">
                <h3>{!cart.length ? "cart is empty" : " Shopping Cart"}</h3>
                <h3>{cart.map(p=><h1 key={p.id}>{p.name}</h1>)}</h3>
                
                                    <ul className="list-group">
                                        {cart.map(p => <li className="list-group-item" key={p.id}>{`${p.cartQty} units of ${p.title}`}
                                            {" "}<button className="btn btn-outline-primary" onClick={() => incrementCart(p)}>+</button>
                                            {" "}{p.cartQty}{" "}
                                            <button className="btn btn-outline-primary" onClick={() => decrementCart(p)}>-</button>
                                            <button className=" mx-2 btn btn-outline-danger" onClick={() => removeFromCart(p)}>X</button>
                                        </li>)}
                                    </ul>
                                    {cart.length > 0 && <button className=" mt-2 btn btn-danger rounderd-lg" onClick={resetCart}>RESET</button>}
                                </div> */}
            </div></div>
    )
}
export default Cart