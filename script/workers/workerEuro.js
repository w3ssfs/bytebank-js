async function conectaAPI() {
  const conecta = await fetch("https://economia.awesomeapi.com.br/last/EURBRL");
  const conectaTraduzido = await conecta.json();
  postMessage(conectaTraduzido.USDBRL);
}

addEventListener("message", () => {
  conectaAPI();
  setInterval(() => conectaAPI(), 5000);
});
