function Cart({ cart, incrementCart, decrementCart, removeFromCart, clearCart }) {
  
  return (
    <div className="py-5 bg-light">
    <div className="container text-center">
      <h3> {!cart.length ? "Cart is empty" : "Shopping Cart:"}</h3>
      <ul>
        {cart.map((p) => (
          <li key={p.id}>
            {`${p.cartQty} units of "${p.title}" in cart `}
            <button onClick={() => incrementCart(p)}> + </button>
            {" "}{p.cartQty}{" "}
            <button onClick={() => decrementCart(p)}> - </button>
            {" "}
            <button className="btn btn-danger btn-sm px-3" onClick={() => removeFromCart(p)}> X </button>
          </li>
        ))}
      </ul>
      {
        cart.length > 0 && <button className="btn btn-sm btn-outline btn-danger" onClick={clearCart}> clear </button>
      }
    </div>
    </div>
  );
}

export default Cart;