import { View } from "./View";
import { ListaNegociacoes } from "../models/ListaNegociacoes";
import { DateHelper } from "../helpers/DateHelper"
export class NegociacoesView extends View<ListaNegociacoes> {
    
        template(model : ListaNegociacoes) : string {
    
            return `
                    
                <table class="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>DATA</th>
                            <th>QUANTIDADE</th>
                            <th>VALOR</th>
                            <th>VOLUME</th>
                        </tr>
                    </thead>   
                    <tbody class="tabela">
                        ${model.negociacoes.map(negociacao => {
                            return `
                                <tr>
                                    <td>${DateHelper.dateToString(negociacao.data)}</td>
                                    <td>${negociacao.quantidade}</td>
                                    <td>${negociacao.valor}</td>
                                    <td>${negociacao.volume}</td>
                                </tr>
                            `
                        }).join("")}
                    </tbody>
                    
                    <tfoot>
                    </tfoot>
                </table>
            `;
        }
    
    }