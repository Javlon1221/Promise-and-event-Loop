const wrapperEl = document.querySelector(".wrapper")

const API_URL = "https://jsonplaceholder.typicode.com/posts"


function renderCard(data){
    const fragmet = document.createDocumentFragment()
    data.forEach(post => {
        let card = document.createElement("div")
        card.className = "card"
        card.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <button>Learn more</button>
        `
        fragmet.appendChild(card)
    });    
    wrapperEl.appendChild(fragmet)
}


async function free(){
    try {
        const response = await fetch(API_URL)
        const promise = response.json()
        promise
            .then(res => {
                renderCard(res);
                
            })
            .catch(err => {
                console.log(err);
                
            })
        
    } catch (error) {
        console.error(error)
    }
    
}

window.onload = ()=>{
    free()
}