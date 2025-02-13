export class Negociacoes {
    constructor() {
        this.negociacoes = []; // Negociacao[] é uma array de Negociacao
    }
    adicionar(negociacao) {
        this.negociacoes.push(negociacao); // adiciona a negociacao no array
    }
    lista() {
        return this.negociacoes;
    }
}
