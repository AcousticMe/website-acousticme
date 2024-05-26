// GET URL PARAMS (ID)

const queryString = window.location.search
const params = new URLSearchParams(queryString)
const id = params.get('id')


function filterMusic() {
    
}


// ROUTE API

const api = `http://localhost:3333/music/${id}`

// GET MUSIC BY ID



function getMusic() {

    const musicImage = document.querySelector("#music-img")
    const musicName = document.querySelector("#music-name")
    const artistName = document.querySelector("#artist-name")
    const musicGenre = document.querySelector("#music-genre")
    const linkMusic = document.querySelector("#link-music")
    const chordsMusic = document.querySelector("#chords")
    const musicDemonstration = document.querySelector("#music-demonstration")
    const descriptionMusic = document.querySelector("#description")
    const chordsRhythms = document.querySelector(".chords-rhythm")


    fetch(api)
        .then(response => response.json())
        .then(data => {


            data = data[0]

            musicImage.src = data.linkImagem
            musicName.textContent = data.nome
            artistName.textContent = data.artista
            musicGenre.textContent = data.genero
            linkMusic.href = data.linkVideoOriginal
            chordsMusic.textContent = data.acordes
            musicDemonstration.src = data.linkVideoDemonstracao
            descriptionMusic.textContent = data.descricao

            if (data.ritmo) {
                const rhythm = document.createElement('div')

                rhythm.innerHTML = `
            
                <h3>Ritmo: <span class="chords">${!data.nomeRitmo ? `Desconhecido` : data.nomeRitmo}</span></h3> 
                <p>${data.ritmo}</p>

            `

                chordsRhythms.append(rhythm)

            }


        }).catch((error) => console.error(error))

}

getMusic()