const initialPrice = document.querySelector("#initial-price");
const stocksQuntity = document.querySelector("#stocks-quntity");
const currentPrice = document.querySelector("#current-price");
const submitBtn = document.querySelector("#submit-btn");
const output = document.querySelector("#output");

submitBtn.addEventListener("click", submitHandler);

function submitHandler() {
  if (
    initialPrice.value > 0 &&
    stocksQuntity.value > 0 &&
    currentPrice.value > 0
  ) {
    var ip = initialPrice.value;
    var qty = stocksQuntity.value;
    var curr = currentPrice.value;
    calculateProfitAndLoss(ip, qty, curr);
    clearOutput();
  } else {
    showOutput("Please fill the valid Information");
    showColorRed();
  }
}

function calculateProfitAndLoss(initial, qunitiy, current) {
  if (initial > current) {
    var loss = (initial - current) * qunitiy;
    var lossPercentage = (loss / initial) * 100;
    showOutput(
      `Your total loss is ${loss} rupees and loss percentage is ${lossPercentage}%`
    );
    showColorRed();
  } else if (current > initial) {
    var profit = (current - initial) * qunitiy;
    var profitPercentage = (profit / initial) * 100;
    showOutput(
      `Your total profit is ${profit} rupees and profit percentage is ${profitPercentage}%`
    );
    showColorGreen();
  } else {
    showOutput("The Stocks are at same price!");
    showColorRed();
  }
}

function showOutput(message) {
  output.innerText = message;
}

function showColorRed() {
  output.style.color = "red";
}

function showColorGreen() {
  output.style.color = "green";
}

function clearOutput() {
  var ip = (initialPrice.value = "");
  var qty = (stocksQuntity.value = "");
  var curr = (currentPrice.value = "");
}
