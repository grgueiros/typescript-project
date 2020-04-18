System.register(["../views/index", "../models/index", "../helpers/DateHelper", "../helpers/decorators/index", "../services/NegociacaoService", "../helpers/Utils"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, DateHelper_1, index_3, NegociacaoService_1, Utils_1, NegociacaoController, DiaDaSemana;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (DateHelper_1_1) {
                DateHelper_1 = DateHelper_1_1;
            },
            function (index_3_1) {
                index_3 = index_3_1;
            },
            function (NegociacaoService_1_1) {
                NegociacaoService_1 = NegociacaoService_1_1;
            },
            function (Utils_1_1) {
                Utils_1 = Utils_1_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this.negociacoes = new index_2.ListaNegociacoes();
                    this.negociacoesView = new index_1.NegociacoesView('#negociacoesView', true);
                    this.mensagemView = new index_1.MensagemView('#mensagemView');
                    this.service = new NegociacaoService_1.NegociacaoService();
                    this.negociacoesView.update(this.negociacoes);
                }
                adiciona(event) {
                    event.preventDefault();
                    let data = DateHelper_1.DateHelper.stringToDate(this.inputData.val());
                    if (!this.ehDiaUtil(data)) {
                        this.mensagemView.update('Somente negociações em dias úteis são válidas');
                        return;
                    }
                    let negociacao = new index_2.Negociacao(data, parseInt(this.inputQuantidade.val()), parseFloat(this.inputValor.val()));
                    this.negociacoes.adiciona(negociacao);
                    Utils_1.imprime(negociacao, this.negociacoes);
                    this.negociacoesView.update(this.negociacoes);
                    this.mensagemView.update('Negociação adicionada com sucesso');
                }
                importa() {
                    return __awaiter(this, void 0, void 0, function* () {
                        const _isOk = (res) => {
                            if (res.ok) {
                                return res;
                            }
                            else {
                                throw new Error(res.statusText);
                            }
                        };
                        try {
                            const negociacoes = yield this.service.obtemNegociacoes(_isOk);
                            negociacoes.forEach(negociacao => this.negociacoes.adiciona(negociacao));
                            this.negociacoesView.update(this.negociacoes);
                        }
                        catch (error) {
                            this.mensagemView.update(error.message);
                        }
                    });
                }
                ehDiaUtil(data) {
                    return !(data.getDay() == DiaDaSemana.Domingo || data.getDay() == DiaDaSemana.Sabado);
                }
            };
            __decorate([
                index_3.domInject('#data')
            ], NegociacaoController.prototype, "inputData", void 0);
            __decorate([
                index_3.domInject('#quantidade')
            ], NegociacaoController.prototype, "inputQuantidade", void 0);
            __decorate([
                index_3.domInject('#valor')
            ], NegociacaoController.prototype, "inputValor", void 0);
            __decorate([
                index_3.throttle()
            ], NegociacaoController.prototype, "importa", null);
            exports_1("NegociacaoController", NegociacaoController);
            (function (DiaDaSemana) {
                DiaDaSemana[DiaDaSemana["Domingo"] = 0] = "Domingo";
                DiaDaSemana[DiaDaSemana["Segunda"] = 1] = "Segunda";
                DiaDaSemana[DiaDaSemana["Ter\u00E7a"] = 2] = "Ter\u00E7a";
                DiaDaSemana[DiaDaSemana["Quarta"] = 3] = "Quarta";
                DiaDaSemana[DiaDaSemana["Quinta"] = 4] = "Quinta";
                DiaDaSemana[DiaDaSemana["Sexta"] = 5] = "Sexta";
                DiaDaSemana[DiaDaSemana["Sabado"] = 6] = "Sabado";
            })(DiaDaSemana || (DiaDaSemana = {}));
        }
    };
});
