
const btn = document.querySelector("#btn-submit").addEventListener('click', postMusic)


function postMusic() {

    const nameMusic = document.querySelector("#name-music")
    const artist = document.querySelector("#artist")
    const genre = document.querySelector("#genre")
    const chords = document.querySelector("#chords")
    const rhythm = document.querySelector("#rhythm")
    const musicImage = document.querySelector("#music-image")
    const originalVideo = document.querySelector("#original-video")
    const demonstrationVideo = document.querySelector("#demonstration-video")
    const description = document.querySelector("#description")
    const warning = document.querySelector(".warning")

    const data = {
        musicName: nameMusic.value,
        artist: artist.value,
        genre: genre.value,
        chords: chords.value,
        linkMusicImage: musicImage.value,
        demonstrationVideoLink: demonstrationVideo.value,
        originalVideoLink: originalVideo.value,
        description: description.value,
        rhythm: rhythm.value
    }

    fetch(`http://localhost:3333/music`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
        .then(response => {

            if (response.status == 201) {

                warning.style.display = "block"

                setTimeout(() => {

                    warning.style.display = "none"

                }, 3000)
               
            } 

        })

        .catch(error => console.error(error))
}

function getRhythm() {

    const rhythm = document.querySelector("#rhythm")


    fetch(`http://localhost:3333/rhythm`)
    .then(response => response.json())
    .then(data => {

        data.forEach(element => {
            
            const option = document.createElement('option')

            option.value = element.id
            option.innerText = element.ritmo

            rhythm.append(option)

        });

    }) 
}

getRhythm()