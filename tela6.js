let form = document.querySelector("#form4");
let btn = document.querySelector("#submit");
function validarInput() {
    let desabilitar = false;
    if (form.nome.value === "") {
        desabilitar = true;
    }
    if (form.mail.value === "") {
        desabilitar = true;
    }
    if (form.age.value === "") {
        desabilitar = true;
    }
   
    if (desabilitar === true) {
        btn.disabled = true;
    } else {
        btn.disabled = false;
    }
}