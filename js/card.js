const constainEl = document.querySelector(".constain")

const urlEl = "https://jsonplaceholder.typicode.com/users"



function freeCom(data){
    const fragmet = document.createDocumentFragment()
    data.forEach((post)=>{
        let card = document.createElement("div")
        card.className = "card"
        card.innerHTML = `
            <h3>${post.name}</h3>
            <p>${post.username}</p>
            <p>${post.address.street}</p>
            <p>${post.phone}</p>
            <p>${post.website}</p>
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
