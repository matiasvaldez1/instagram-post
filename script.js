
const slides = document.getElementById('slides');

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

(function fetchImages(){
    const res = fetch("https://picsum.photos/v2/list?page=2&limit=10")
    .then(res => res.json())
    .then(data =>{
        return data.map((image) =>{
            let img = createNode('img');
            img.src = image.download_url;
            img.classList.add("swiper-slide")
            append(slides,img)
        })
    })
}());


const swiper = new Swiper('.swiper', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
    });



