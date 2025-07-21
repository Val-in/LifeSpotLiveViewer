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

    // Добавим на страницу
    writeReview(review)
}

/*
* Запишем отзыв на страницу 
* 
* */
const writeReview = (review) => {
    const reviewsContainer = document.getElementById("reviews");
    const reviewDivision = document.createElement("div");
    reviewDivision.className = "review-text";
    
    reviewDivision.innerHTML = `
     <p><i><b>${review.userName}</b>  ${review.date}</i></p>
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