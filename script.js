const elementoHora = document.getElementById("hora");
const elementoData = document.getElementById("data");
const botaoFormato = document.getElementById("formato");

let formato24Horas = true;

function atualizarRelogio() {
  const agora = new Date();

  const opcoesHora = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: !formato24Horas
  };

  const opcoesData = {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric"
  };

  elementoHora.textContent = agora.toLocaleTimeString("pt-BR", opcoesHora);
  elementoData.textContent = agora.toLocaleDateString("pt-BR", opcoesData);
}

botaoFormato.addEventListener("click", () => {
  formato24Horas = !formato24Horas;
  botaoFormato.textContent = formato24Horas ? "Formato 24 h" : "Formato 12 h";
  atualizarRelogio();
});

atualizarRelogio();
setInterval(atualizarRelogio, 1000);
