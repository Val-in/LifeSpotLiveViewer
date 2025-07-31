function getReview() {
    // Создадим объект
    let review = {}

    // Сохраним свойство имени
    review["userName"] = prompt("Как вас зовут ?")
    if (review["userName"] == null) {
        return
    }

    // Сохраним текст отзыва
    review["comment"] = prompt("Напишите свой отзыв")
    if (review["comment"] == null) {
        return
    }

    // Сохраним текущее время
    review["date"] = new Date().toLocaleString()

    let enableLikes = confirm('Разрешить пользователям оценивать ваш отзыв?')

    if(enableLikes) {
        review.rate = 0;
    } 
        writeReview(review);
}

function addLike(id) {
    // Найдём нужный элемент по id
    let element = document.getElementById(id);

    // Преобразуем текст элемента в массив, разбив его по пробелам (так как счётчик лайков у нас отделен от символа ❤️пробелом)
    let array = element.innerText.split(' ')

    // Вытащим искомое значение счётчика и сразу же преобразуем его в число, так как
    // при сложении любого значения со строкой в JS будет строка, а нам этого не требуется
    let resultNum = parseInt(array[array.length - 1], 10);

    // Увеличим счётчик
    resultNum += 1

    // Сохраним измененное значение обратно в массив
    array[array.length - 1] =  resultNum;

    // Обновим текст элемента
    element.innerText = array.join(' ')
}

/*
* Запишем отзыв на страницу 
* 
* */
const writeReview = (review) => {
      
    const reviewsContainer = document.getElementById("reviews");
    const reviewDivision = document.createElement("div");
    reviewDivision.className = "review-text";

    let likeInfo = '';
    if (review.hasOwnProperty('rate')) {
        let commentId = Math.random();
        
        likeInfo += '<button id="' + commentId + '" style="border: none" onclick="addLike(this.id)">' + `❤️ ${review.rate}</button>`;
    }

    reviewDivision.innerHTML = `
        <p><i><b>${review.userName}</b> ${review.date} ${likeInfo}</i></p>
        <p>${review.comment}</p>
    `;


    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.className = "delete-review-button";
    deleteButton.onclick = () => {
        reviewsContainer.removeChild(reviewDivision);
    };

    // Добавляем кнопку в отзыв
    reviewDivision.appendChild(deleteButton);

    // Добавляем отзыв в контейнер
    reviewsContainer.appendChild(reviewDivision);
}