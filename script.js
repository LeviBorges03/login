function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(username==="admin" && password==="1234") {
        window.location.href="bemvindo.html"
    } else{

       document.getElementById("mensagem").textContent="Usuario ou senha incorretos"
    }
 
}