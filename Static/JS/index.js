function handleSession (logger, checker){

    // Проверяем дату захода и проставляем, если новый визит
    if(window.sessionStorage.getItem("startDate") == null){
        window.sessionStorage.setItem("startDate", new Date().toLocaleString())
    }

    // Проверяем userAgent и проставляем, если новый визит
    if(window.sessionStorage.getItem("userAgent") == null){
        window.sessionStorage.setItem("userAgent", window.navigator.userAgent)
    }

    // Проверяем возраст и проставляем, если новый визит
    if(window.sessionStorage.getItem("userAge") == null){
        let input = prompt("Пожалуйста, введите ваш возраст?");
        window.sessionStorage.setItem("userAge", input)

        /* Возраст отсутствовал в sessionStorage. Значит, это первый визит пользователя, и
         при прохождении проверки на возраст он увидит приветствие*/
        checker(true)
    }else{

        /* Пользователь заходит не первый раз, приветствие не показываем. */
        checker(false)
    }
    
    logger()
}

    let checker = function (newVisit) {
        if (window.sessionStorage.getItem("userAge") >= 18) {
            if (newVisit) {
                alert("Приветствуем на LifeSpot! " + '\n' + "Текущее время: " + new Date().toLocaleString());

                setTimeout(() =>
                        alert("Нравится LifeSpot? " + '\n' + "Подпишитесь на наш Instagram @lifespot999!"),
                    30000);
            }
        } 
        else {
            alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
            setTimeout(() => window.location.href = "http://www.google.com", 2000);
        }
    }
    // Вывод в консоль
    let logger = function () {
        console.log('Начало сессии: ' + window.sessionStorage.getItem("startDate"))
        console.log('Даныне клиента: ' + window.sessionStorage.getItem("userAgent"))
        console.log('Возраст пользователя: ' + window.sessionStorage.getItem("userAge"))
    }

    window.addEventListener('DOMContentLoaded', () => {
        // Этот код выполнится, когда HTML полностью загружен
        handleSession(logger, checker);

    let contentFilter = function filterContent() {
    
        // Сохраняем текст пользовательского запроса.
        let inputString = document.getElementsByTagName('input')[0].value.toLowerCase();
        // Находим контейнеры с видео, которые необходимо фильтровать
        let elements = document.getElementsByClassName('video-container');
    
        // Пробегаемся по контейнерам
        for (let i = 0; i < elements.length; i++) {
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