System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Negociacao;
    return {
        setters: [],
        execute: function () {
            Negociacao = class Negociacao {
                constructor(data, quantidade, valor) {
                    this.data = data;
                    this.quantidade = quantidade;
                    this.valor = valor;
                    this.data = data;
                    this.quantidade = quantidade;
                    this.valor = valor;
                }
                get volume() {
                    return this.valor * this.quantidade;
                }
                ehIgual(negociacao) {
                    return this.data.getDate() == negociacao.data.getDate() &&
                        this.data.getMonth() == negociacao.data.getMonth() &&
                        this.data.getFullYear() == negociacao.data.getFullYear() &&
                        this.volume == negociacao.volume;
                }
                imprime() {
                    console.log("----Impressão-----");
                    console.log(`
            Negociacao:
                Data : ${this.data}
                Quantidade : ${this.quantidade}
                Valor : ${this.valor}
                Volume : ${this.volume}
        
        `);
                }
            };
            exports_1("Negociacao", Negociacao);
        }
    };
});
