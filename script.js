function goBack() {
    window.history.back();
}
function showMessage() {
	alert("Привет! JavaScript работает.");
}

function showTable(tableId, button) {
    // Скрываем все таблицы
    document.getElementById('danceTable').style.display = 'none';
    document.getElementById('rentalTable').style.display = 'none';

	// Убираем класс "active" у всех кнопок
    document.getElementById('danceButton').classList.remove('active');
    document.getElementById('rentalButton').classList.remove('active');

    // Отображаем выбранную таблицу
    document.getElementById(tableId).style.display = 'table';
    
    // Добавляем класс "active" на выбранную кнопку
    button.classList.add('active');
}

// Отображаем таблицу "Танцы" при загрузке страницы
window.onload = function() {
    showTable('danceTable', document.getElementById('danceButton'));
}

function showMore() {
    var moreText = document.getElementById("moreText");
    var btnText = document.querySelector(".show-more-btn");
    
    var moreText = document.getElementById("moreText");
    var btnText = document.querySelector(".show-more-btn");
    
    moreText.style.display = "block"; // Показать скрытый текст
    btnText.style.display = "none"; // Скрыть кнопку
}
