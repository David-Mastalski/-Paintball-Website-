const THUMBNAILS = document.querySelectorAll('.thumbnail img')
const POPUP = document.querySelector('.popUp-galery-photo')
const POPUP_IMG = document.querySelector('.popup-img')

///Buttons
const POPUP_CLOSE = document.querySelector('.close-popUp-btn')
const ARROW_LEFT = document.querySelector('.popup-arrow--left')
const ARROW_RIGHT = document.querySelector('.popup-arrow--right')

let currentImgIndex
let galeryLengthValue = document.getElementById('galery-length')
let currentImgNumberValue = document.getElementById('current-photo-number')



const setGaleryLengthAndInfo = (currentImgIndex) => {
    galeryLengthValue.innerText = THUMBNAILS.length
    currentImgNumberValue.innerText = currentImgIndex
}

THUMBNAILS.forEach((thumbnail, index)=> {
    thumbnail.addEventListener('click', (e) => {
        POPUP_IMG.src = e.target.src
        POPUP.classList.remove('hidden')

        currentImgIndex = index
        setGaleryLengthAndInfo(currentImgIndex + 1)
    })
})

POPUP_CLOSE.addEventListener('click', () => {
    POPUP.classList.add('hidden')
})

ARROW_LEFT.addEventListener('click', () => {
    currentImgIndex-=1
    if(currentImgIndex < 0){
        currentImgIndex = THUMBNAILS.length -1
    }
    POPUP_IMG.src = THUMBNAILS[currentImgIndex].src
    setGaleryLengthAndInfo(currentImgIndex + 1)
})

ARROW_RIGHT.addEventListener('click', () => {
    currentImgIndex+=1
    if(currentImgIndex > THUMBNAILS.length-1){
        currentImgIndex = 0
    }
    POPUP_IMG.src = THUMBNAILS[currentImgIndex].src
    setGaleryLengthAndInfo(currentImgIndex + 1)
})