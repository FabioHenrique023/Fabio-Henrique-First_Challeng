let form = document.querySelector("#form");
let btn = document.querySelector("#proximo");
function validar() {
    let desabilitar = false;
    if (form.market.value === "") {
        desabilitar = true;
    }
    if (form.account.value === "") {
        desabilitar = true;
    }

    if (desabilitar === true) {
        btn.disabled = true;
    } else {
        btn.disabled = false;
    }
}