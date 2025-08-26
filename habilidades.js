
const habilidades = {
  H27: "Aplicar conceitos estatísticos em análise de dados.",
  H28: "Interpretar gráficos de pizza, moda, média e mediana.",
  H29: "Organizar dados coletados e apresentar resultados.",
  H30: "Criar jogos educativos aplicando probabilidade e combinatória.",
  H31: "Desenvolver roteiros e atividades matemáticas criativas.",
  H32: "Aplicar princípios de probabilidade em situações práticas."
};

document.addEventListener("DOMContentLoaded", () => {
  const botoesHab = document.querySelectorAll(".btn-hab");

  botoesHab.forEach(btn => {
    const codigo = btn.textContent.trim();
    const tooltip = document.createElement("div");
    tooltip.className = "tooltip";
    tooltip.textContent = habilidades[codigo] || "Habilidade não definida";
    btn.parentElement.appendChild(tooltip);
  });
});
