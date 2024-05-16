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
                    <p>${element.genero}</p>
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