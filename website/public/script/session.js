const body = document.querySelector("body")
document.querySelector("#logOut").addEventListener('click', logOut)


// VALIDATE SESSION
body.onload = () => {
    
    const name = sessionStorage.USER_NAME 
    const passwd = sessionStorage.USER_PASSWD
    const role = sessionStorage.USER_ROLE
    
    if(name == null && passwd == null) {
        window.location = "../login.html"
    } 
    
    else if (role == "administrador") {
        const newMusic = document.querySelector("#new-music")
        
        newMusic.style.display = "flex"
    }

}


function logOut() {
    sessionStorage.clear()
    window.location = "../login.html"
}

