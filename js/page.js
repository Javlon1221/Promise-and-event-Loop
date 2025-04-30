const constainEl = document.querySelector(".constain")

const urlEl = "https://jsonplaceholder.typicode.com/comments"



function freeCom(data){
    const fragmet = document.createDocumentFragment()
    data.forEach((post)=>{
        let card = document.createElement("div")
        card.className = "card"
        card.innerHTML = `
            <h3>${post.name}</h3>
            <p>${post.body}</p>
            <span>${post.email}</span>
            <button>Learn more</button>
        `
        fragmet.appendChild(card)
    })
    constainEl.appendChild(fragmet)
}

async function freeComment(){
    try {
        const response = await fetch(urlEl)
        const promise = response.json()
        promise
            .then(res => {
                freeCom(res)
            })
            .catch(err => {
                console.log(err)
            })
        
    } catch (error) {
        console.error(error)
    }
}

window.onload = ()=>{
    freeComment()
}
