const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
const calculate = document.querySelector("#calculate");
const number = document.querySelector("#number");
const classification = document.querySelector("#classification");

calculate.addEventListener("click", calculateIMC);

function calculateIMC() {
  let h = height.value / 100;
  let w = weight.value;
  let imc = w / (h * h);

  number.textContent = imc.toFixed(2);

  if (imc < 18.5) {
    classification.innerText = "Abaixo do Peso";
    classification.style.color = "#fea611";
  }

  if (imc >= 18.5 && imc <= 24.9) {
    classification.innerText = "Peso Saudável";
    classification.style.color = "#3b7c2e";
  }

  if (imc >= 25 && imc <= 30) {
    classification.innerText = "Sobrepeso";
    classification.style.color = "#ec5b3c";
  }

  if (imc >= 30.1 && imc <= 39.9) {
    classification.innerHTML = "Obeso";
    classification.style.color = "#ee3a20";
  }

  if (imc > 40) {
    classification.innerHTML = "Obeso Mórbido";
    classification.style.color = "#fc1707";
  }
}
