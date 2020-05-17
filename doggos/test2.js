const select = document.querySelector(".breeds");

for (var i = 1; i < 11; i++){
    const option = document.createElement("option");
    var x = 64;

    option.innerText = String.fromCharCode(x+i);

    select.appendChild(option);
}