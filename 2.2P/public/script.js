const form = document.getElementById("calculator-form");
const resultDisplay = document.getElementById("result");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;

  resultDisplay.textContent = "Calculating...";

  try {
    const response = await fetch(`/add?num1=${num1}&num2=${num2}`);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "The calculation failed.");
    }

    resultDisplay.textContent = `${data.num1} + ${data.num2} = ${data.result}`;
  } catch (error) {
    resultDisplay.textContent = error.message;
  }
});