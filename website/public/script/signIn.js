const submit = document.querySelector("#input_submit")
submit.addEventListener('click', signIn)

function signIn() {

    const outputError = document.querySelector("#output-error")

    const name = document.querySelector("#input_name")
    const passwd = document.querySelector("#input_passwd")

    if (!name.value && !passwd.value) {

        outputError.textContent = "Preencha os campos!"
        name.style.borderColor = "red"
        passwd.style.borderColor = "red"

    } else if (!name.value) {

        outputError.textContent = "Preencha o usuário!"
        name.style.borderColor = "red"

    } else if (!passwd.value) {

        outputError.textContent = "Preencha a senha!"
        passwd.style.borderColor = "red"

    } else {

        const data = {
            name: name.value,
            passwd: passwd.value,
        }

        fetch(`http://localhost:3333/signIn`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
            .then(response => {

                if (response.status == 200) {

                    response.json().then(data => {

                        sessionStorage.USER_NAME = data.response[0].nome
                        sessionStorage.USER_PASSWD = data.response[0].senha
                        sessionStorage.USER_ROLE = data.response[0].permissao

                        submit.style.backgroundColor = "blue"
                        submit.value = "Entrando..."

                        setTimeout(() => {
                            window.location = "./acousticMe/index.html"
                        }, 1000)

                    })

                } else {
                    outputError.textContent = "Usuário não encontrado!"
                }



            })

            .catch(error => console.error(error))

    }



} 
