import React, { useContext, useEffect } from "react";
import "./Cart.css";
import { StoreContext } from "../../store/StoreContext";
import { useNavigate, Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart , getTotalCartAmount,url} = useContext(StoreContext);

  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="cart">
      <div className="cart-item">
        <div className="cart-items-title">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {Array.isArray(food_list) && food_list.length > 0 ? (
          food_list.map((item, index) => {
            const quantity = cartItems?.[item._id];
            if (quantity > 0) {
              return (
                <div key={item._id}>
                  <div className="cart-items-title cart-items-item">
                    <img src={url+"/images/"+item.image} alt="" />
                    <p>{item.name}</p>
                    <p>Rs {item.price}</p>
                    <p>{quantity}</p>
                    <p>Rs {item.price * quantity}</p>
                    <button onClick={() => removeFromCart(item._id)}>
                      Remove
                    </button>
                  </div>
                  <hr />
                </div>
              );
            }
            return null;
          })
        ) : (
          <p>No items in the cart</p>
        )}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{getTotalCartAmount()===0?0:150}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>{getTotalCartAmount()===0?0:getTotalCartAmount()+150}</p>
            </div>
            <hr />
          </div>
          <button onClick={()=>navigate('/Order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>if you have a promo code, Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;