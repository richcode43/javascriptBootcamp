const help = document.getElementsByClassName("help");
for (let i = 0; i < help.length; i++) {
    help[i].addEventListener('click', function() {
        this.classList.toggle("active");
        let box = this.nextElementSibling;
        // alert(box);

        if (box.style.display === "block") {
            box.style.display = "none";
        } else {
            box.style.display = "block";

        }
    })
}