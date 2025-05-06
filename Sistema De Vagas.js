let vagas = [];

function listarVagas() {
  const vagasEmTexto = vagas.reduce((textoFinal, vaga, indice) => {
    textoFinal += `${indice}. ${vaga.nome} (${vaga.candidatos.length} candidatos)\n`;
    return textoFinal;
  }, '');
  alert(vagasEmTexto || "Nenhuma vaga disponível.");
}

function criarVaga() {
  const nome = prompt("Digite o nome da vaga:");
  const descricao = prompt("Digite a descrição da vaga:");
  const dataLimite = prompt("Digite a data limite (formato: dd/mm/aaaa):");

  const confirmacao = confirm(
    `Deseja criar uma nova vaga com essas informações?\n\n` +
    `Nome: ${nome}\nDescrição: ${descricao}\nData Limite: ${dataLimite}`
  );

  if (confirmacao) {
    vagas.push({ nome, descricao, dataLimite, candidatos: [] });
    alert("Vaga criada com sucesso!");
  } else {
    alert("Criação de vaga cancelada.");
  }
}

function visualizarVaga() {
  const indice = prompt("Digite o índice da vaga que deseja visualizar:");
  const vaga = vagas[indice];

  if (!vaga) {
    alert("Vaga não encontrada.");
    return;
  }

  const candidatosEmTexto = vaga.candidatos.reduce((texto, candidato) => texto + ` - ${candidato}\n`, "");
  alert(
    `Vaga ${indice}:\n` +
    `Nome: ${vaga.nome}\nDescrição: ${vaga.descricao}\nData Limite: ${vaga.dataLimite}\n` +
    `Quantidade de candidatos: ${vaga.candidatos.length}\n` +
    `Candidatos:\n${candidatosEmTexto || "Nenhum candidato ainda."}`
  );
}

function inscreverCandidato() {
  const nomeCandidato = prompt("Digite o nome do candidato:");
  const indice = prompt("Digite o índice da vaga para inscrição:");
  const vaga = vagas[indice];

  if (!vaga) {
    alert("Vaga não encontrada.");
    return;
  }

  const confirmacao = confirm(
    `Deseja inscrever o candidato ${nomeCandidato} na vaga ${indice}?\n\n` +
    `Nome: ${vaga.nome}\nDescrição: ${vaga.descricao}\nData Limite: ${vaga.dataLimite}`
  );

  if (confirmacao) {
    vaga.candidatos.push(nomeCandidato);
    alert("Candidato inscrito com sucesso!");
  } else {
    alert("Inscrição cancelada.");
  }
}

function excluirVaga() {
  const indice = prompt("Digite o índice da vaga que deseja excluir:");
  const vaga = vagas[indice];

  if (!vaga) {
    alert("Vaga não encontrada.");
    return;
  }

  const confirmacao = confirm(
    `Tem certeza que deseja excluir a vaga ${indice}?\n\n` +
    `Nome: ${vaga.nome}\nDescrição: ${vaga.descricao}\nData Limite: ${vaga.dataLimite}`
  );

  if (confirmacao) {
    vagas.splice(indice, 1);
    alert("Vaga excluída com sucesso!");
  } else {
    alert("Exclusão cancelada.");
  }
}

function exibirMenu() {
  let opcao = "";

  do {
    opcao = prompt(
      "Sistema de Vagas de Emprego\n\n" +
      "Escolha uma opção:\n" +
      "1 - Listar vagas disponíveis\n" +
      "2 - Criar uma nova vaga\n" +
      "3 - Visualizar uma vaga\n" +
      "4 - Inscrever um candidato\n" +
      "5 - Excluir uma vaga\n" +
      "6 - Sair"
    );

    switch (opcao) {
      case "1":
        listarVagas();
        break;
      case "2":
        criarVaga();
        break;
      case "3":
        visualizarVaga();
        break;
      case "4":
        inscreverCandidato();
        break;
      case "5":
        excluirVaga();
        break;
      case "6":
        alert("Saindo do sistema...");
        break;
      default:
        alert("Opção inválida. Tente novamente.");
    }
  } while (opcao !== "6");
}

exibirMenu();
