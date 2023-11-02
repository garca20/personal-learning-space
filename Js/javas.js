function load_page() {
    Swal.fire({
        title: "La pagina cargó correctamente",
        text: "¡Bienvenido!",
        icon: 'succes',
        showConfirmButton: false
    })
}

function reload_page() {
    load_page();
}

const box       = document.querySelector("#box");

const valOne        = document.querySelector("#input_valOne")
const valTwo        = document.querySelector("#input_valTwo")
const btn_calculate = document.querySelector("#btn_calculate");

btn_calculate.addEventListener("mouseover", event_name => {
    let name = valOne.value + " " + valTwo.value;
    name = name.toUpperCase();
    alert(name);
});

function entry() { box.style.backgroundColor = "#000" }

function exit() { box.style.backgroundColor = "#FFF" }

function inside_timer() {

}

function outside_timer() {

}