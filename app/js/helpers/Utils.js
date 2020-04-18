System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var imprime;
    return {
        setters: [],
        execute: function () {
            exports_1("imprime", imprime = (...objetos) => {
                objetos.forEach(objeto => objeto.imprime());
            });
        }
    };
});
