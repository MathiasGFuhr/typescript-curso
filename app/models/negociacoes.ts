import { Negociacao } from "./negociacao.js";

export class Negociacoes {
  private negociacoes: Negociacao[] = []; // Negociacao[] é uma array de Negociacao

  adicionar(negociacao: Negociacao) {
    this.negociacoes.push(negociacao); // adiciona a negociacao no array
  }

  lista(): readonly Negociacao[] { // readonly é uma array que não pode ser alterada
    return this.negociacoes;
  }


}
