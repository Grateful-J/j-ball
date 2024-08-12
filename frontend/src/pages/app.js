document.getElementById("eightball").addEventListener("click", async () => {
  const response = await fetch("/api/phrase");
  const data = await response.json();
  document.getElementById("phrase").innerText = data.phrase;
});
