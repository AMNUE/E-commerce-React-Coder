
import { stock } from "../data/stock";






export const pedirProducts = () =>{
    return new Promise ((resolve, reject) =>{
        setTimeout(() =>{
            resolve(stock);
            reject("rechazado");
        }, 2000)
    })
}