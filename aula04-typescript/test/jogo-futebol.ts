import { Time } from './../src/time';
import { expect } from 'chai';
import { JogoDeFutebol } from './../src/jogo-futebol';

describe("Inclusão de jogador", () => {
    const jogo = new JogoDeFutebol();

    it("Adicionar jogador com sucesso", () => {
        let timeActual = jogo.incluirTime(1, "bruno", new Date(2010, 1, 1), "preto", "Branco");

        let timeExpected: Time = {
            id: 1,
            nome: "bruno",
            dataCriacao: new Date(2010, 1, 1),
            corUniformePrincipal: "preto",
            corUniformeSecundario: "Branco 111"
        }

        expect(JSON.stringify(timeExpected), "Time esperado").to.equals(JSON.stringify(timeActual));
    })
});