System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ListaNegociacoes;
    return {
        setters: [],
        execute: function () {
            ListaNegociacoes = class ListaNegociacoes {
                constructor() {
                    this.negociacoes = [];
                }
                adiciona(negociacao) {
                    if (!this.negociacoes.some(negociacaoExistente => negociacaoExistente.ehIgual(negociacao)))
                        this.negociacoes.push(negociacao);
                }
                imprime() {
                    this.negociacoes.forEach(negociacao => console.log(negociacao));
                }
            };
            exports_1("ListaNegociacoes", ListaNegociacoes);
        }
    };
});
