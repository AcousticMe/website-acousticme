const submit = document.querySelector("#input_submit")
submit.addEventListener('click', signUp)

function signUp() {

    const outputError = document.querySelector("#output-error")

    const name = document.querySelector("#input_name")
    const passwd = document.querySelector("#input_passwd")
    const confirmPasswd = document.querySelector("#input_confirmPasswd")

    if (!name.value && !passwd.value && !confirmPasswd.value) {

        outputError.textContent = "Preencha todos os campos!"
        name.style.borderColor = "red"
        passwd.style.borderColor = "red"
        confirmPasswd.style.borderColor = "red"

    } else if (!name.value) {

        outputError.textContent = "Preencha o campo usuário!"
        name.style.borderColor = "red"


    } else if (!passwd.value) {

        outputError.textContent = "Preencha o campo senha!"
        passwd.style.borderColor = "red"

    } else if (!confirmPasswd.value) {

        outputError.textContent = "Preencha o campo confirmar senha!"
        confirmPasswd.style.borderColor = "red"

    }

    else if (passwd.value != confirmPasswd.value) {

        outputError.textContent = "Campo de senha e confirmar senha tem que estar iguais!"
        passwd.style.borderColor = "red"

    } else if (name.value.length < 6) {

        outputError.textContent = "O usuário deve conter no mínimo 6 digitos!"
        name.style.borderColor = "red"

    } else if (passwd.value.length < 6) {

        outputError.textContent = "A senha deve conter no mínimo 6 digitos!"
        passwd.style.borderColor = "red"

    } else {

        const data = {
            name: name.value,
            passwd: passwd.value,
        }

        fetch(`http://localhost:3333/signUp`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
            .then(() => {

                submit.style.backgroundColor = "blue"
                submit.value = "Usuário cadastrado!"

                setTimeout(() => {
                    window.location = "./login.html"
                }, 2000)

            })

            .catch(error => console.error(error))
    }



}



