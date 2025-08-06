fetch("ranking.json")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("ranking");
    container.innerHTML = "<h2>Ranking Geral</h2>";
    let tabela = "<table><tr><th>Jogador</th><th>PTS</th></tr>";
    data.forEach(j => {
      tabela += `<tr><td>${j.nome}</td><td>${j.pts}</td></tr>`;
    });
    tabela += "</table>";
    container.innerHTML += tabela;
  });