import { Negociacao } from "./Negociacao";
import { Imprimivel } from "./Imprimivel";

export class ListaNegociacoes implements Imprimivel {
    
    
    readonly negociacoes: Array<Negociacao> = [];
    
    
    public adiciona(negociacao: Negociacao) : void {
        
        if(!this.negociacoes.some(negociacaoExistente => negociacaoExistente.ehIgual(negociacao)))
        this.negociacoes.push(negociacao);
        
    }
    imprime(): void {
        this.negociacoes.forEach(negociacao => console.log(negociacao));
    }
    
}