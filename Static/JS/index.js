function handleSession(logger, checker) {
    if (window.sessionStorage.getItem("startDate") == null) {
        window.sessionStorage.setItem("startDate", new Date().toLocaleString());
    }

    if (window.sessionStorage.getItem("userAgent") == null) {
        window.sessionStorage.setItem("userAgent", window.navigator.userAgent);
    }

    if (window.sessionStorage.getItem("userAge") == null) {
        let input = prompt("Please enter your age:");
        if (input === null) { // пользователь отменил
            checker(false);
            logger();
            return;
        }
        window.sessionStorage.setItem("userAge", input);
        checker(true);
    } else {
        checker(false);
    }

    logger();
}

let checker = function (newVisit) {
    const age = parseInt(window.sessionStorage.getItem("userAge"), 10); // <-- parseInt
    if (!Number.isInteger(age)) {
        alert("Invalid age stored. You will be redirected.");
        setTimeout(() => window.location.href = "http://www.google.com", 2000);
        return;
    }

    if (age >= 18) {
        if (newVisit) {
            alert("Welcome to LifeSpot!\nCurrent time: " + new Date().toLocaleString());
            setTimeout(() =>
                    alert("Enjoying LifeSpot?\nFollow us on Instagram @lifespot999!"),
                30000
            );
        }
    } else {
        alert("Our streams are not intended for users under 18. You will be redirected.");
        setTimeout(() => window.location.href = "http://www.google.com", 2000);
    }
};

let logger = function () {
    console.log('Session start: ' + window.sessionStorage.getItem("startDate"));
    console.log('Client data: ' + window.sessionStorage.getItem("userAgent"));
    console.log('User age: ' + window.sessionStorage.getItem("userAge"));
};

window.addEventListener('DOMContentLoaded', () => {
    handleSession(logger, checker);

    // Сделаем функцию глобальной, чтобы oninput="contentFilter()" в HTML работал
    window.contentFilter = function () {
        const inputEl = document.getElementsByTagName('input')[0];
        if (!inputEl) return;
        let inputString = inputEl.value.toLowerCase();
        let elements = document.getElementsByClassName('video-container');

        for (let i = 0; i < elements.length; i++) {
            let titleEl = elements[i].querySelector(".video-title");
            if (!titleEl) continue;
            let videoText = titleEl.innerText;
            if (!videoText.toLowerCase().includes(inputString)) {
                elements[i].style.display = 'none';
            } else {
                elements[i].style.display = 'inline-block';
            }
        }
    };
});
