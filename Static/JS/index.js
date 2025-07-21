let sessionHandler = function handleSession() {

    // создадим объект Map для хранения сессии
    let session = new Map();
    // Сохраним UserAgent
    session.set("userAgent", window.navigator.userAgent)

    let age = Number(prompt("Пожалуйста, введите ваш возраст"));
    session.set("age", age);

    if (age >= 18) {
        let startDate = new Date().toLocaleString();
        alert("Приветствуем на LifeSpot! " + '\n' + "Текущее время: " + startDate);
        session.set("startDate", startDate)

        setTimeout(() =>
                alert("Нравится LifeSpot? " + '\n' + "Подпишитесь на наш Instagram @lifespot999!"),
            30000);
    }
    else {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        setTimeout(() => window.location.href = "http://www.google.com", 2000); 
    }
    // Вывод в консоль
    for (let result of session) {
        console.log(result)
    }
}

sessionHandler();

let contentFilter = function filterContent() {

    // Сохраняем текст пользовательского запроса.
    let inputString = document.getElementsByTagName('input')[0].value.toLowerCase();
    // Находим контейнеры с видео, которые необходимо фильтровать
    let elements = document.getElementsByClassName('video-container');

    // Пробегаемся по контейнерам
    for (let i = 0; i <= elements.length; i++) {
        // Вытаскиваем текст описания видео, которое необходимо отфильтровать
        let videoText = elements[i].querySelector(".video-title").innerText;
        // Выполняем фильтрацию, сравнивая значения в нижнем регистре
        if (!videoText.toLowerCase().includes(inputString.toLowerCase())) {
            // Скрываем неподходящие
            elements[i].style.display = 'none';
        } else {
            // Показываем подходящие
            elements[i].style.display = 'inline-block';
        }
    }
}