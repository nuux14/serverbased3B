function add(){
    var n1 = document.getElementById("num1"),
        n2 = document.getElementById("num2"),
        lbl= document.getElementById("result");

    lbl.innerText = Number(n1.value)+ Number(n2.value);
}