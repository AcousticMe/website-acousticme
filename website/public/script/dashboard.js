const ctx = document.getElementById('myChart');
const countGenre = document.getElementById('countGenre');

function getCountGenre() {

    fetch('http://localhost:3333/genre')

        .then(response => response.json())
        .then(data => {

            const countRock = data[0].quantidade    
            const countPop = data[1].quantidade
            const countSertanejo = !data[2] ? 0 : data[2].quantidade

            countGenre.innerText = data.length

            new Chart(ctx, {
                type: 'bar',
                data: {
                    
                    labels: [data[0].genero, data[1].genero, 'Sertanejo'],
                    datasets: [{
                        label: 'Genero',
                        data: [countRock, countPop, countSertanejo],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });

        })
}

function getAllMusic() {
    fetch('http://localhost:3333/allMusic')

        .then(response => response.json())
        .then(data => {
            const countMusic = document.getElementById('countMusic');
            countMusic.innerText = data.length
        })
}

function getArtist() {
    fetch('http://localhost:3333/artists')
        .then(response => response.json())
        .then(data => {
            const countArtists = document.getElementById('countArtists');
            countArtists.innerText = data.length
        })
}

getArtist()
getAllMusic();
getCountGenre();





