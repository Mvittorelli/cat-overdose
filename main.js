let src = 0
let image = document.getElementById('image');
setInterval(() => {
    image.src = "cat/" + src + ".jpg" ;
    if (src == 21) {
        src = 0
        console.log("reset")
    } else {
        src++;
        console.log(src)
    }
}, 100)
