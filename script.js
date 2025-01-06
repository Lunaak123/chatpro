document.getElementById("nextButton").addEventListener("click", function () {
  const maleName = document.getElementById("maleName").value.trim();
  const femaleName = document.getElementById("femaleName").value.trim();

  if (maleName === "" || femaleName === "") {
    alert("Please enter both names!");
    return;
  }

  document.querySelector(".form").style.display = "none";
  document.querySelector(".decision").style.display = "block";
});

document.getElementById("loveYesButton").addEventListener("click", function () {
  const maleName = document.getElementById("maleName").value.trim();
  const femaleName = document.getElementById("femaleName").value.trim();

  document.querySelector(".decision").style.display = "none";
  document.querySelector(".result").style.display = "block";

  const heart = document.getElementById("heart");
  heart.className = "heart";

  const resultText = document.getElementById("resultText");
  resultText.textContent = `${maleName} ❤️ ${femaleName}`;
});

document.getElementById("loveNoButton").addEventListener("click", function () {
  const maleName = document.getElementById("maleName").value.trim();
  const femaleName = document.getElementById("femaleName").value.trim();

  document.querySelector(".decision").style.display = "none";
  document.querySelector(".result").style.display = "block";

  const heart = document.getElementById("heart");
  heart.className = "broken-heart";

  const resultText = document.getElementById("resultText");
  resultText.textContent = `${maleName} 💔 ${femaleName}`;
});
