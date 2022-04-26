const Bob = document.querySelector('.face')
let count = 0

function moveBob() {
    count += 50
    console.log(count)
    Bob.style.left = count + 'px' // CSS left property
}

Bob.addEventListener('click', moveBob)