// alert("ffff");
let counter = 0;
document.querySelector("#increment").addEventListener('click', function() {
    document.getElementById("counter").innerText = counter++;
});

document.querySelector("#decrement").addEventListener('click', function() {
    document.getElementById("counter").innerText = counter--;
});