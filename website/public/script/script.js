function filterMusic(genreMusic) {

    const cards = document.querySelector(".card-content")
    let card;
    
    const genre = cards.getElementsByTagName("span");
    
    for (let count = 0; count < genre.length; count++) {
        
        let span = genre[count]
        card = cards.getElementsByTagName("a")[count]

        if (genreMusic.indexOf(span.textContent) > -1) {
            card.style.display = "block"
        } else if (genreMusic == "Tudo") {
            card.style.display = "block"
        } else {
            card.style.display = "none"
        }

    }
}


// ROUTE API


function getAllMusic(api) {

    const cardContent = document.querySelector(".card-content")
    let musicNumber = document.querySelector("#musicNumber")

    fetch(api)

        .then(response => response.json())
        .then(data => {

            musicNumber.textContent = data.length - 1

            data.forEach(element => {


                const card = document.createElement('a')

                card.innerHTML = `
                <div class="card">
                <img src=${element.linkImagem} alt="Capa album">
                <div>
                <div>
                    <h2>${element.nome}</h2>
                    <span>${element.genero}</span>
                </div>
                <p class="description">${element.descricao} </p> 
                </div>
                `
                cardContent.append(card)

                card.href = `music.html?id=${element.id}`


            })

        }).catch(error => console.error(error))

}



getAllMusic('http://localhost:3333/allMusic')