let qty = document.getElementById("qty");
let count = 1;

document.querySelector(".plus").onclick = () => {
    count++;
    qty.innerText = count;
}

document.querySelector(".minus").onclick = () => {
    if (count > 1) {
        count--;
        qty.innerText = count;
    }
}
