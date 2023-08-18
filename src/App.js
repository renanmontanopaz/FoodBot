import './App.css';
import Buttom from "./Components/Buttom/Buttom";
import Card from "./Components/Card/Card";

const { getData } = require("./db/db");
function App() {
  return (
    <>
        Eu estou aqui !
        <Buttom title={'Adicionar'} disable={false} type={'add'}/>
        <Buttom title={'Remover'} disable={false} type={'remove'}/>
        <Buttom title={'Checkout'} disable={false} type={'checkout'}/>
        <Card/>
    </>
  );
}

export default App;
