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

function showMore() {
    var moreText = document.getElementById("moreText");
    var btnText = document.querySelector(".show-more-btn");
    
    var moreText = document.getElementById("moreText");
    var btnText = document.querySelector(".show-more-btn");
    
    moreText.style.display = "block"; // Показать скрытый текст
    btnText.style.display = "none"; // Скрыть кнопку
}

//Проверка формы
function proverka() 
{  
   strokaF=document.forma1.FF.value;  // Имя: 1я-большая буква, остальный маленькие
   strokaF1=strokaF.substring(0,1);
   strokaF2=strokaF1.toUpperCase();
   strokaF3=strokaF.substring(1,strokaF.length);
   strokaF4=strokaF3.toLowerCase();
   if ((strokaF1==strokaF2)&&(strokaF3==strokaF4)&&(strokaF!='')){aa=window.confirm('Фамилия введена правильно')}
      else {aa=false; alert('Фамилия введена неправильно! Исправьте, пожалуйста, согласно шаблона!'); return;}

   strokaI=document.forma1.II.value;  // Имя: 1я-большая буква, остальный маленькие
   strokaI1=strokaI.substring(0,1);
   strokaI2=strokaI1.toUpperCase();
   strokaI3=strokaI.substring(1,strokaI.length);
   strokaI4=strokaI3.toLowerCase();
   if ((strokaI1==strokaI2)&&(strokaI3==strokaI4)&&(strokaI!='')){bb=window.confirm('Имя введено правильно')}
      else {bb=false; alert('Имя введено неправильно! Исправьте, пожалуйста, согласно шаблона!'); return;}

   strokaO=document.forma1.OO.value;
   strokaO1=strokaO.substring(0,1);
   strokaO2=strokaO1.toUpperCase();
   strokaO3=strokaO.substring(1,strokaO.length);
   strokaO4=strokaO3.toLowerCase();
   if ((strokaO1==strokaO2)&&(strokaO3==strokaO4)&&(strokaO!='')){cc=window.confirm('Отчество введено правильно')}
      else {cc=false; alert('Отчество введено неправильно! Исправьте, пожалуйста, согласно шаблона!'); return;}

	strokaT=document.forma1.TT.value;  // Телефон по шаблону и не более 17 символов
   ccc=strokaT.indexOf('8-(');
   ddd=strokaT.indexOf(')-');
   eee=strokaT.indexOf('-',11);
   fff=strokaT.indexOf('-',14);
   ggg=strokaT.length;
   if ((ccc==0)&&(ddd==6)&&(eee==11)&&(fff==14)&&(ggg==17)){gg=window.confirm('Номер телефона введен правильно')}
      else {gg=false; alert('Номер телефона введен неправильно! Исправьте, пожалуйста, согласно шаблона!'); return;}
      
    let strokaE = document.forma1.EE.value.trim(); // Получаем значение и убираем лишние пробелы
    // Массив допустимых имен преподавателей
    const teachers = [
        'Регина Чаплыгина',
        'Виталий Долгов',
        'Вика Степнюк',
        'Никита Зинченко',
        'Лиза Косова',
        'Влад Умдали',
        'Маша Харламова',
        'Миша Горпенченко',
        'Анна Меренкова'];
    // Проверка, есть ли введенное имя в списке
    if (teachers.includes(strokaE)) {dd=window.confirm('Преподаватель введен правильно');}
    	else {dd=false; alert('Имя преподавателя введено неправильно! Исправьте, пожалуйста, согласно шаблона.'); return;}
   
   if (aa && bb && cc && dd && gg) {forma1.submit();}
   
   alert('Форма успешно отправлена!');
   window.location.href = "schedule.htm";
}


window.onload = function() {
	//price.htm"
	if (window.location.pathname.endsWith("price.htm")) {
	    showTable('danceTable', document.getElementById('danceButton'));
	    
	//schedule.htm
	} else if (window.location.pathname.endsWith("schedule.htm")) {
        //alert("Выберите занятие, и мы будем ждать Вас :)");
        const lessonsMessage = `Выберите занятие, и мы будем ждать Вас :)`;
        openModal(lessonsMessage);        
        const scheduleCells = document.querySelectorAll(".schedule-cell");
        // Добавляем обработчик события для каждой ячейки
        scheduleCells.forEach(cell => {
            cell.addEventListener("click", function() {
                // Получаем текст из выбранной ячейки
                if (cell.textContent.trim() !== "") {  // Проверяем, что ячейка не пустая
	                const lessonDetails = `Вы успешно записаны на занятие:` + "\n" + cell.innerHTML.replace(/<br\s*\/?>/gi, "\n").replace(/<\/?(b|span)[^>]*>/gi, "")
	                // Отображаем уведомление
	                openModal(lessonDetails);
	            }
            });
        });
        
    //glavn.htm
    } else if (window.location.pathname.endsWith("glavn.htm")) {
        const date = new Date();
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');

        const daysOfWeek = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
        const weekday = daysOfWeek[date.getDay()];

        const greetingMessage = `Привет! Добро пожаловать на сайт Vitas Dance Studio.` + "\n" +
                                `Сегодня ${day}.${month}.${year} г., ${weekday}` + "\n" + `Сейчас ${hours}:${minutes}:${seconds}`;

        openModal(greetingMessage);
    }
};
function openModal(message) {
    const modalMessageElement = document.getElementById("welcomeMessage");
    modalMessageElement.innerText = message;
    document.getElementById("welcomeModal").style.display = "block";
    document.getElementById("closeButton").focus();  // Установка фокуса на кнопку "ЗАКРЫТЬ"
}
function closeModal() {
    document.getElementById("welcomeModal").style.display = "none";
}
