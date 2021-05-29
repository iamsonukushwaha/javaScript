function checkLength() {
    var input = document.getElementById("pwd").value;
    var len  = input.length;

    if(len<6) {
        alert("minimum length is six");
    } else {
        alert("ooookkk");
    }
}

