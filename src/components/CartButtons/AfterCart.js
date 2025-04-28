import React from "react";
import "./CartButtons.css";

const Aftercart = () => {
    return (
        <div className="after-cart">
            <div className="cart-counter-button">
                <button className="cart-counter-button">-</button>
                <div className="cart-count">1</div>
                <button className="cart-counter-button">+</button>
            </div>
        </div>
    );
};

export default Aftercart;
