import shuffleWords from "shuffle-words";

window.aGoodHardShuffling = () => {
  const text = document.getElementById("input").value;
  document.getElementById("output").textContent = shuffleWords(text);
  document.getElementById("submit").textContent = "Shuffle me again, Big Poppa";
};
