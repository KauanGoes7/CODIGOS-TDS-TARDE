function login() {
    var nome = $("#nome").val();
    var senha = $("#senha").val();

    if (nome == "admin" && senha == "1234") {
        const user = {
            name: nome,
            dataEntrada: new Date(),
            id: Math.floor(Math.random() * 100000),
        }
        localStorage.setItem("user", JSON.stringify(user))
        window.location.href = "../loja/index.html";

    } else {
        document.getElementById("error-model").style.display = "flex"
        document.getElementById("nome").style.border = "2px solid red"
        document.getElementById("senha").style.border = "2px solid red"
    }



}

function fecharError() {
    document.getElementById("error-model").style.display = "flex"
    document.getElementById("nome").style.border = "2px solid red"
    document.getElementById("senha").style.border = "2px solid red"
}
function showPassword() {
    var inputsenha = document.getElementById("#senha")
    if (inputsenha.getAttribute("type") == "password") {
        inputsenha.setAttribute("type", "text")

    } else {
        inputsenha.setAttribute("type", "password")
    }

}