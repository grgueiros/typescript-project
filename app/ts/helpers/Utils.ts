import { Imprimivel } from "../models/Imprimivel";


export const imprime = (...objetos : Imprimivel[]) => {
    
    objetos.forEach(objeto => objeto.imprime());

}