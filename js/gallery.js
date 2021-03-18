let imagesContainer = document.querySelector('.project-screenshots')
let images
if (imagesContainer) images = imagesContainer.childNodes
const body = document.querySelector('body')

const closeGallery = ()=>{
    document.querySelector('#gallery').remove()
    body.style.overflow = 'auto'
}

const openGallery = ()=>{
    const eventTarget = event.target
    body.style.overflow = 'hidden'
    let galleryDiv = `
    <div id="gallery">
        <div id="close-gallery-bg"></div>
        <div id="gallery-img-container">
            <img data-id="${eventTarget.getAttribute('data-id')}" src="${eventTarget.src}" alt="${eventTarget.getAttribute('alt')}">
            <div id="gallery-controls">
                <i class="fas fa-chevron-left" id="gallery-control-prev"></i>
                <span>${eventTarget.getAttribute('data-id')}/${imagesContainer.children.length}</span>
                <i class="fas fa-chevron-right" id="gallery-control-next"></i>
            </div>
        </div>
    </div>
    `
    document.querySelector('.project-screenshots-container').insertAdjacentHTML('afterend', galleryDiv)
    const gallery = document.querySelector('#gallery')
    document.querySelector('#close-gallery-bg').addEventListener('click', closeGallery)

    const prevArrow = document.querySelector('#gallery-control-prev')
    const nextArrow = document.querySelector('#gallery-control-next')
    
    if(!eventTarget.previousElementSibling) prevArrow.style.visibility = 'hidden'
    if(!eventTarget.nextElementSibling) nextArrow.style.visibility = 'hidden'

    const galleryImgContainer = document.querySelector('#gallery-img-container')
    const goToPrevImg = ()=>{
        nextArrow.style.visibility = 'visible'
        let displayedImg = galleryImgContainer.childNodes[1]
        let prevImg = document.querySelector(`[data-id="${displayedImg.getAttribute('data-id')}"]`).previousElementSibling
        if(!prevImg.previousElementSibling) prevArrow.style.visibility = 'hidden'
        if(!prevImg) return
        displayedImg.src = prevImg.src
        displayedImg.setAttribute('data-id', prevImg.getAttribute('data-id'))
        galleryImgContainer.childNodes[3].childNodes[3].innerHTML = `${Number(displayedImg.getAttribute('data-id'))}/${imagesContainer.children.length}`
    }

    const goToNextImg = ()=>{
        prevArrow.style.visibility = 'visible'
        let displayedImg = galleryImgContainer.childNodes[1]
        let nextImg = document.querySelector(`[data-id="${displayedImg.getAttribute('data-id')}"]`).nextElementSibling
        if(!nextImg.nextElementSibling) nextArrow.style.visibility = 'hidden'
        if(!nextImg) return
        displayedImg.src = nextImg.src
        displayedImg.setAttribute('data-id', nextImg.getAttribute('data-id'))
        galleryImgContainer.childNodes[3].childNodes[3].innerHTML = `${Number(displayedImg.getAttribute('data-id'))}/${imagesContainer.children.length}`
    }

    // const changeImg = (arrow, imgToChangeTo)=>{
    //     arrow.style.visibility = 'visible'
    //     let displayedImg = galleryImgContainer.childNodes[1]
    //     let prevImg = document.querySelector(`[data-id="${displayedImg.getAttribute('data-id')}"]`).previousElementSibling
    //     let nextImg = document.querySelector(`[data-id="${displayedImg.getAttribute('data-id')}"]`).nextElementSibling
    //     if(!imgToChangeTo.nextElementSibling) nextArrow.style.visibility = 'hidden'
    //     if(!imgToChangeTo) return
    //     displayedImg.src = imgToChangeTo.src
    //     displayedImg.setAttribute('data-id', imgToChangeTo.getAttribute('data-id'))
    //     galleryImgContainer.childNodes[3].childNodes[3].innerHTML = `${Number(displayedImg.getAttribute('data-id'))}/${imagesContainer.children.length}`
    // }

    prevArrow.addEventListener('click', goToPrevImg)
    nextArrow.addEventListener('click', goToNextImg)
}

if(images){
    images.forEach(image=>{
        image.addEventListener('click', openGallery)
    })
}

