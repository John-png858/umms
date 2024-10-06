// app.js

// Dummy Menu Data with Images
const menu = [
    { name: 'Pizza', description: 'Cheese and tomato', price: '$5', img: 'https://via.placeholder.com/100x100?text=Pizza' },
    { name: 'Burger', description: 'Beef patty with fries', price: '$4', img: 'https://via.placeholder.com/100x100?text=Burger' },
    { name: 'Pasta', description: 'Penne with marinara sauce', price: '$6', img: 'https://via.placeholder.com/100x100?text=Pasta' },
];

// Populate Menu Table
const menuTable = document.getElementById('menu-table').getElementsByTagName('tbody')[0];
menu.forEach(item => {
    const row = menuTable.insertRow();
    row.innerHTML = `
        <td>${item.name}</td>
        <td><img src="${item.img}" alt="${item.name}"></td>
        <td>${item.description}</td>
        <td>${item.price}</td>
        <td><button onclick="addToOrder('${item.name}')">Order</button></td>
    `;
});



// Example of Adding Item to Order via Table
function addToOrder(mealName) {
    alert(`You have added ${mealName} to your order.`);
}
