function getReview() {
    let review = {};

    review["userName"] = prompt("What is your name?");
    if (review["userName"] == null) return;

    review["comment"] = prompt("Write your review");
    if (review["comment"] == null) return;

    review["date"] = new Date().toLocaleString();

    let enableLikes = confirm('Allow users to like your review?');
    if (enableLikes) {
        review.rate = 0;
    }

    writeReview(review);
}

function addLike(id) {
    let element = document.getElementById(id);
    let array = element.innerText.split(' ');
    let resultNum = parseInt(array[array.length - 1], 10);
    resultNum += 1;
    array[array.length - 1] = resultNum;
    element.innerText = array.join(' ');
}

const writeReview = (review) => {
    const reviewsContainer = document.getElementById("reviews");
    const reviewButton = reviewsContainer.querySelector(".review-button");

    const reviewDivision = document.createElement("div");
    reviewDivision.className = "review-text";

    let likeInfo = '';
    if (review.hasOwnProperty('rate')) {
        let commentId = Math.random();
        likeInfo += `<button id="${commentId}" style="border: none; background: white; cursor: pointer;" onclick="addLike(this.id)">❤️ ${review.rate}</button>`;
    }

    const deleteButton = `<button style="border: none; background: white; color: red; cursor: pointer; font-weight: bold;">✖</button>`;

    reviewDivision.innerHTML = `
        <p><i><b>${review.userName}</b> ${review.date} ${likeInfo} ${deleteButton}</i></p>
        <p>${review.comment}</p>
    `;

    const delBtn = reviewDivision.querySelector("button:last-of-type");
    delBtn.onclick = () => {
        reviewsContainer.removeChild(reviewDivision);
    };

    reviewsContainer.insertBefore(reviewDivision, reviewButton);
};
