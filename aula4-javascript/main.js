//public void incluirTime(Long id, String nome, LocalDate dataCriacao, 
//String corUniformePrincipal, String corUniformeSecundario);

const times = [];
function incluirTime(id, nome, dataCriacao, corUniformePrincipal, corUniformeSecundario) {
    times.push({
        id: id,
        nome: nome,
        dataCriacao: dataCriacao,
        corUniformePrincipal: corUniformePrincipal,
        corUniformeSecundario: corUniformeSecundario,
        jogadores: []
    });
}

function buscarTimePorId(idTime) {
    return times.filter(t => {
        return t.id == idTime;
    })[0];
}

function buscarJogadorMaiorSalario() {
    let d = buscarJogadores().sort(bySalarioAndId());
}

function buscarJogadores() {
    return times.reduce((previous, current) => {
        return previous.concat(current.jogadores);
    }, []);
}

function bySalarioAndId() {
    return (j1, j2) => {
        if (j1.salario > j2.salario) {
            return -1;
        }
        if (j1.salario < j2.salario) {
            return 1;
        }

        if (j1.id > j2.id) {
            return 1;
        } else return 0;
    };
}

function incluirJogador(id, idTime, nome, dataNascimento, nivelHabilidade, salario) {
    let time = buscarTimePorId(idTime);

    let jogador = {
        id: id,
        idTime: time.id,
        nome: nome,
        dataNascimento: dataNascimento,
        nivelHabilidade: nivelHabilidade,
        salario: salario
    };

    time.jogadores.push(jogador);
}

incluirTime(2, "Flamengo", new Date(2017, 1, 1), "Branco", "preto");
incluirTime(3, "Vasco", new Date(2017, 1, 1), "Branco", "preto");

incluirJogador(1001, 2, "Brunão", new Date(1993, 8, 27), 100, 1);
incluirJogador(1003, 3, "Zé das Neves", new Date(1990, 8, 27), 100, 2500);
incluirJogador(1002, 3, "João das Neves", new Date(1990, 8, 27), 100, 2500);

buscarJogadorMaiorSalario();

console.log(times);
console.log(buscarJogadores());