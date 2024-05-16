// ROUTE API


function getAllMusic(api) {

    const cardContent = document.querySelector("table")

    fetch(api)

        .then(response => response.json())
        .then(data => {


            data.forEach(element => {

                console.log(element)
                const table = document.createElement('tr')

                table.innerHTML = `
                <td>${element.id}</td>
                <td><img src="${element.linkImagem}" /></td>
                <td>${element.nome}</td>
                <td>${element.artista}</td>
                <td onclick="deleteMusic(${element.id})"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg></td>
                `
                cardContent.append(table)



            })

        }).catch(error => console.error(error))

}

function deleteMusic(id) {

    const warningDelete = document.querySelector(".warningDelete")

    fetch("http://localhost:3333/music/" + id, {
        method: 'DELETE'
    })
        .then(response => {

            if (response.status == 204) {

                warningDelete.style.display = "block"

                setTimeout(() => {

                    warningDelete.style.display = "none"

                }, 3000)

            }

        }).catch(error => console.error(error))

}


getAllMusic('http://localhost:3333/allMusic')