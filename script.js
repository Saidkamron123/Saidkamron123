let balance = 5; // звезды
const balanceEl = document.getElementById("balance");
const messageEl = document.getElementById("message");

// Обновляем отображение баланса
function updateBalance() {
  balanceEl.textContent = balance;
}

// Покупка товара
function buyItem() {
  if (balance >= 1) {
    balance -= 1;
    updateBalance();
    messageEl.textContent = "Вы купили летучую мышку!";
  } else {
    messageEl.textContent = "Недостаточно звёзд!";
  }
}

// Привязываем кнопку
document.getElementById("buy-button").addEventListener("click", buyItem);

// Показываем начальный баланс
updateBalance();
