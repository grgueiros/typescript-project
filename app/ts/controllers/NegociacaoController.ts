import { NegociacoesView, MensagemView } from "../views/index";
import { ListaNegociacoes, Negociacao, NegociacaoParcial } from "../models/index";
import { DateHelper } from "../helpers/DateHelper";
import { domInject, throttle } from "../helpers/decorators/index";
import { NegociacaoService, HandlerFunction } from "../services/NegociacaoService";
import { imprime } from "../helpers/Utils";



export class NegociacaoController {

    @domInject('#data')
    private inputData: JQuery;
    @domInject('#quantidade')
    private inputQuantidade: JQuery;
    @domInject('#valor')
    private inputValor: JQuery;
    private negociacoes = new ListaNegociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView', true);
    private mensagemView = new MensagemView('#mensagemView');
    private service = new NegociacaoService();

    constructor() {
        this.negociacoesView.update(this.negociacoes);
    }

    adiciona(event: Event) {

        event.preventDefault();

        let data = DateHelper.stringToDate(this.inputData.val());

        if (!this.ehDiaUtil(data)) {
            this.mensagemView.update('Somente negociações em dias úteis são válidas');
            return;
        }

        let negociacao = new Negociacao(
            data,
            parseInt(this.inputQuantidade.val()),
            parseFloat(this.inputValor.val()));

        this.negociacoes.adiciona(negociacao);

        imprime(negociacao, this.negociacoes);

        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso');


    }

    @throttle()
    async importa() {

        const _isOk: HandlerFunction = (res: Response) => {
            if (res.ok) {
                return res;
            } else {
                throw new Error(res.statusText)
            }
        }

        try {
            const negociacoes = await this.service.obtemNegociacoes(_isOk)
            negociacoes.forEach(negociacao => this.negociacoes.adiciona(negociacao))
            this.negociacoesView.update(this.negociacoes);
        } catch (error) {
            this.mensagemView.update(error.message);
        }
    }

    private ehDiaUtil(data: Date): boolean {
        return !(data.getDay() == DiaDaSemana.Domingo || data.getDay() == DiaDaSemana.Sabado);
    }

}

enum DiaDaSemana {
    Domingo,
    Segunda,
    Terça,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}