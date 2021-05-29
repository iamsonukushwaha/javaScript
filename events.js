function subscriber() {
    alert("you pressed a key");
}

function mouseHov() {
    document.getElementById("img").src="img/flower.jpeg";
}

function mouseOuter() {
    document.getElementById("img").src="img/info.png";
}

function addElement() {
    var element = document.createElement("input");
    element.setAttribute("type", "button");
    element.setAttribute("name", "name");
    element.setAttribute("value", "dynamic");

    var x = document.getElementById("span1");
    x.appendChild(element);
}