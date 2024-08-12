document.getElementById("eightball").addEventListener("click", async () => {
  const response = await fetch("/api/phrase");
  const data = await response.json();
  const phraseElement = document.getElementById("phrase");

  // Clear previous phrase
  phraseElement.innerText = "";

  // Simulate the phrase appearing in the void
  let index = 0;
  const interval = setInterval(() => {
    if (index < data.phrase.length) {
      phraseElement.innerHTML += data.phrase[index];
      index++;
    } else {
      clearInterval(interval);
    }
  }, 100); // Adjust the speed as needed
});
