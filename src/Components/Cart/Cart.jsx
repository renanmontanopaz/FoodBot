import React from "react";
import './Cart.css';
import Buttom from "../Buttom/Buttom";

function Cart({cartItems, onCheckout }){

    const totalPrice = cartItems.reduce((a,c) => a + c.price * c.quantity, 0);


    return (
        <div className="cart__container">
            <div>
                <div className="cart__text">
                    {cartItems.length === 0 ? "Sem itens no carrinho!" : ""}
                </div>

                <br/> <span className="">Valor Total: R${totalPrice.toFixed(2)}</span>
                <Buttom title={`${cartItems.length === 0 ? 'Pedido !' : 'Checkout'}` }
                        type={"checkout"}
                        disable={cartItems.length === 0 ? true : false }
                        onClick={onCheckout}
                >

                </Buttom>
            </div>
        </div>
    )
}

export default Cart;