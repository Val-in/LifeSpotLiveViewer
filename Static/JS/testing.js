const getInfo = function getInfo() {
    const el = document.getElementsByClassName('simpleText').innerHTML("Choose an option:");
    const select = document.getElementById("mySelect");
    alert(select.value);
};

function getComment() {
    const comment = document.getElementById("comment").value;
    alert("Your comment " + comment);
}

let elements = document.getElementsByTagName('*');

// Выведем результат в уведомление
alert(`Количество элементов на странице:  ${elements.length}`);