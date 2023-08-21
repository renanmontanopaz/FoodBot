import React, {useState} from "react";
import './Card.css';
import Buttom from "../Buttom/Buttom";
function Card({food, onAdd, onRemove}){

    const [count, setCount] = useState(0);

    const {title, Image, price, id} = food;
    const handleIncrement = ()=>{
        setCount(count + 1);
        onAdd(food);
    }
    const handleDecrement = ()=>{
        setCount(count - 1);
        onRemove(food);
    }
    return(
        <div className="card">
            <span className={`${count !== 0 ? "card__badge" : "card__badge--hidden" }`}>
                {count}
            </span>
            <div className="image__container">
                <img src={Image} alt={title} />
            </div>
            <h4 className="card__title">
                {title} . <span className="card__price">R$ {price}</span>
            </h4>
            <div className="btn-container">
                <Buttom title={"+"} type={"add"} onClick={handleIncrement}/>
                {count !== 0 ?(
                    <Buttom title={'-'} type={'remove'} onClick={handleDecrement}/>
                ): (
                    ""
                )}
            </div>
        </div>
    )
}

export default Card