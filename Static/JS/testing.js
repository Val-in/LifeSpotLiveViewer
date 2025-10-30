const getInfo = function getInfo() {
    const el = document.getElementsByClassName('simpleText').innerHTML("Choose an option:");
    const select = document.getElementById("mySelect");
    alert(select.value);
};

function getComment() {
    const comment = document.getElementById("comment").value;
    alert("Your comment " + comment);
}

// let elements = document.getElementsByTagName('*');
//
// alert(`Number of elements on this page:  ${elements.length}`);