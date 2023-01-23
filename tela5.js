let form = document.querySelector("#form3");
let btn = document.querySelector("#next6");
function validarCheck() {
    let desabilitar = false;
    if (form.area.value === "") {
        desabilitar = true;
    }
   
    if (desabilitar === true) {
        btn.disabled = true;
    } else {
        btn.disabled = false;
    }
}

form.addEventListener("keyup", validarCheck)