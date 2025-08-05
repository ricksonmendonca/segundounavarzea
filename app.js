
const listaPresenca = [];
function confirmarPresenca() {
  const nome = document.getElementById('nomePresenca').value;
  if (nome) {
    listaPresenca.push(nome);
    atualizarListaPresenca();
    document.getElementById('nomePresenca').value = "";
  }
}
function atualizarListaPresenca() {
  const ul = document.getElementById("listaPresenca");
  ul.innerHTML = "";
  listaPresenca.forEach((nome) => {
    const li = document.createElement("li");
    li.textContent = nome;
    ul.appendChild(li);
  });
}

const jogadores = [
  { nome: "Carlos", pontos: 18 },
  { nome: "Lucas", pontos: 15 },
  { nome: "João", pontos: 14 },
  { nome: "Rafael", pontos: 12 },
  { nome: "Felipe", pontos: 10 },
];
function atualizarRanking() {
  const ol = document.getElementById("rankingGeral");
  jogadores.forEach((j) => {
    const li = document.createElement("li");
    li.textContent = `${j.nome} - ${j.pontos} pts`;
    ol.appendChild(li);
  });
}

const artilheiros = [
  { nome: "Carlos", gols: 7, assistencias: 3 },
  { nome: "Lucas", gols: 5, assistencias: 4 },
];
function atualizarArtilharia() {
  const ul = document.getElementById("rankingArtilharia");
  artilheiros.forEach((j) => {
    const li = document.createElement("li");
    li.textContent = `${j.nome} - Gols: ${j.gols}, Assistências: ${j.assistencias}`;
    ul.appendChild(li);
  });
}

function mostrarFoto(event) {
  const galeria = document.getElementById("galeria");
  const file = event.target.files[0];
  if (file) {
    const img = document.createElement("img");
    img.src = URL.createObjectURL(file);
    galeria.appendChild(img);
  }
}

function sortearTimes() {
  const jogadores = [...listaPresenca];
  jogadores.sort(() => Math.random() - 0.5);
  const meio = Math.ceil(jogadores.length / 2);
  const time1 = jogadores.slice(0, meio);
  const time2 = jogadores.slice(meio);
  const div = document.getElementById("timesSorteados");
  div.innerHTML = `<div>🔴 Time 1: ${time1.join(", ")}</div><div>🔵 Time 2: ${time2.join(", ")}</div>`;
}

const votos = {};
function votarCraque() {
  const nome = document.getElementById("votoNome").value;
  if (nome) {
    votos[nome] = (votos[nome] || 0) + 1;
    atualizarVotacao();
    document.getElementById("votoNome").value = "";
  }
}
function atualizarVotacao() {
  const ul = document.getElementById("votosCraque");
  ul.innerHTML = "";
  const entries = Object.entries(votos).sort((a, b) => b[1] - a[1]);
  entries.forEach(([nome, qtd]) => {
    const li = document.createElement("li");
    li.textContent = `${nome} - ${qtd} voto(s)`;
    ul.appendChild(li);
  });
  if (entries.length > 0) {
    document.getElementById("craqueRodada").textContent = entries[0][0];
  }
}

document.addEventListener("DOMContentLoaded", () => {
  atualizarRanking();
  atualizarArtilharia();
});
