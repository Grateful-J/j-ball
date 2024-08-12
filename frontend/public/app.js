let typingInterval; // Declare the interval variable in the outer scope

document.getElementById("eightball").addEventListener("click", async () => {
  const response = await fetch("/api/phrase");
  const data = await response.json();
  const phraseElement = document.getElementById("phrase");

  // Clear previous phrase and any ongoing interval
  phraseElement.innerText = "";
  if (typingInterval) {
    clearInterval(typingInterval);
  }

  // Simulate the phrase appearing in the void
  let index = 0;
  typingInterval = setInterval(() => {
    if (index < data.phrase.length) {
      phraseElement.innerHTML += data.phrase[index];
      index++;
    } else {
      clearInterval(typingInterval);
    }
  }, 100); // Adjust the speed as needed
});
