let src = 1
let image = document.getElementById('image');
while (true) {
    image.src = src;
    if (src == 22) {
        src = 0
        console.log("reset")
    } else {
        src++;
        console.log(src)
    }

}


