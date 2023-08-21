import './App.css';
import Card from "./Components/Card/Card";
import Cart from "./Components/Cart/Cart";
import {useState} from "react";

const { getData } = require("./db/db");
const foods = getData();

function App() {

    const [cartItems, setCartItems] = useState([])
    const onAdd = (food) => {
        const exist = cartItems.find((x) => x.id === food.id);
        if (exist) {
            setCartItems(
                cartItems.map((x) =>
                    x.id === food.id ? { ...exist, quantity: exist.quantity + 1 } : x
                )
            );
        } else {
            setCartItems([...cartItems, { ...food, quantity: 1 }]);
        }
    };
  return (
    <>
        <h1 className="heading">Pedir Comida</h1>
        <Cart cartItems={cartItems} />
        <div className="cards__container">
            {foods.map(food =>{
                return <Card food={food} key={food.id}/>
            })}
        </div>

    </>
  );
}

export default App;
