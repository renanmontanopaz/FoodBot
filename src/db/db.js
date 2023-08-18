import pizzaImg from '../Components/images/pizza.png';
import burgerImg from '../Components/images/burger.png';
import cocaImg from '../Components/images/coca.png';
import saladImg from '../Components/images/salad.png';
import waterImg from '../Components/images/water.png';
import iceCreamImg from '../Components/images/icecream.png';
import kebabImg from '../Components/images/kebab.png';

export function getData(){
    return [
        { title: "Pizza", price: 17.99, Image: pizzaImg,id:1 },
        { title: "Hamburguer", price: 15, Image: burgerImg,id:2 },
        { title: "Coca-cola", price: 3.5, Image: cocaImg ,id:3},
        { title: "Espetinho", price: 13.99, Image: kebabImg,id:4 },
        { title: "Salada", price: 2.5, Image: saladImg,id:5 },
        { title: "Água", price: 0.99, Image: waterImg,id:6 },
        { title: "Sorvete", price: 2.99, Image: iceCreamImg,id:7 },
    ];
}