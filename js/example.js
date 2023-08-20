var greeting = 'Приветствтую, ';
var name = 'Сатору';
var message = '! Пожалуста проверьте заказ:';
var welcome = greeting + name + message;

//Создаем переменные, в которых будет храниться подробная информация о табличке
var sign = 'Сеть интернета';
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

//Получаем элемент с идонтефикатором greeting
var el = document.getElementById('greeting');
//Заменяем содержимое элемента на персонализированное приветственное сообщение
el.textContent = welcome;

//Получаем элемент с идонтефикатором userSign и обновляем его содержимое
var elSIgn = document.getElementById('userSign');
elSIgn.textContent = sign;

//Получаем элемент с идонтефикатором titles и обновляем его содержимое
var elTitles = document.getElementById('titles');
elTitles.textContent = titles;

//Получаем элемент с идонтефикатором subTotal и обновляем его содержимое
var elSubTotal = document.getElementById('subTotal');
elSubTotal.textContent = subTotal + '₽';

//Получаем элемент с идонтефикатором shipping и обновляем его содержимое
var elSubTotal = document.getElementById('shipping');
elShipping.textContent = shipping + '₽';

//Получаем элемент с идонтефикатором grandTotal и обновляем его содержимое
var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = grandTotal + '₽';