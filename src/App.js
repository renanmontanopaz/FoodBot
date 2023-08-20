import './App.css';
import Buttom from "./Components/Buttom/Buttom";
import Card from "./Components/Card/Card";
const { getData } = require("./db/db");

const foods = getData();

function App() {
  return (
    <>
        Eu estou aqui !
        <Buttom title={'Adicionar'} disable={false} type={'add'}/>
        <Buttom title={'Remover'} disable={false} type={'remove'}/>
        <Buttom title={'Checkout'} disable={false} type={'checkout'}/>
        {foods.map(food =>{
            return <Card food={food} key={food.id}/>
        })}
    </>
  );
}

export default App;
