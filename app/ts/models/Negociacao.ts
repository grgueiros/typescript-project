import { Imprimivel } from "./Imprimivel";

export class Negociacao implements Imprimivel{


    constructor(readonly data: Date, readonly quantidade: number,readonly  valor: number){
        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;
    }

    get volume(): number {
        return this.valor * this.quantidade;
    }

    ehIgual(negociacao : Negociacao) : boolean {

        return this.data.getDate() == negociacao.data.getDate() &&
                this.data.getMonth() == negociacao.data.getMonth() &&
                this.data.getFullYear() == negociacao.data.getFullYear()&&
                this.volume == negociacao.volume;
    }

    imprime() : void {

        console.log("----Impressão-----")
        console.log(`
            Negociacao:
                Data : ${this.data}
                Quantidade : ${this.quantidade}
                Valor : ${this.valor}
                Volume : ${this.volume}
        
        `)

    }

 
}