const slides = document.getElementById('slides');
const like = document.getElementById('like')
const commentWrapper = document.getElementById('comments')
const comments = []

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

/* Fetching images and using them */

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
    .then(()=>{
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
    })
}());

/* Toggle like */

like.addEventListener('click',() =>{
    if(like.className === "like-class"){
        like.className = "like-red"
        return like.src = "./assets/me-gusta-rojo.png"
    }
    like.className = "like-class"
    return like.src = "./assets/me-gusta.png" 
})

/* Make a comment */

function handleInput(){
    const value = document.getElementById("input-comment").value
    if(value !== ""){
    const p = createNode("p")
    p.classList.add("p-comments")
    p.innerHTML = `Erik dunlop: ${value}`
    comments.push(p)
    append(commentWrapper,...comments)
    }else{
        return value
    }
}

/* Handle focus */
function handleFocus(){
document.getElementById('input-comment').focus();
}



