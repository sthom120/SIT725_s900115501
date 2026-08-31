const socket = io();

const expenseForm = document.getElementById('expenseForm');
const nameInput = document.getElementById('name');
const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const expenseList = document.getElementById('expenseList');

expenseForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const expense = {
        name: nameInput.value,
        description: descriptionInput.value,
        amount: amountInput.value
    };

    socket.emit('newExpense', expense);

    descriptionInput.value = '';
    amountInput.value = '';
});

socket.on('expenseAdded', (expense) => {
    const listItem = document.createElement('li');

    listItem.textContent =
        `${expense.name} - ${expense.description} - $${expense.amount}`;

    expenseList.prepend(listItem);
});