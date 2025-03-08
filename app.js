// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let amigos = []
const listaAmigos = document.getElementById("listaAmigos")

const agregarAmigo = ()=>{
    let nameInput = document.getElementById("amigo")
    let name = nameInput.value.toLowerCase()
    if (name == ""){
        alert("No se ha ingresado ningún nombre")
    }
    else if(amigos.includes(name)){
        alert("Amigo ya agregado")
    }
    else{
        amigos.push(name)
        actualizarLista(name)
    }
    nameInput.value = ""
}

const actualizarLista = (name) => {
    listaAmigos.innerHTML = ""
    let amigo_li
    amigos.forEach(amigo =>{
        amigo_li = document.createElement("li")
        amigo_li.innerHTML = formatearNombre(amigo)
        listaAmigos.appendChild(amigo_li)
    })
}

const sortearAmigo = () => {
    let cantidad = amigos.length
    if (cantidad == 0){
        alert("Lista vacia, ingrese amigos para sortear")
    }else{
        const idx = Math.floor(Math.random()*cantidad)
        let amigo = formatearNombre(amigos[idx])
        amigos = []
        listaAmigos.innerHTML = ""
        let resultado = document.getElementById("resultado")
        resultado.innerHTML = `<li>El amigo sorteado es: ${amigo} !!!</li>`
    }
}


const formatearNombre = (nombre) =>{
    return nombre = nombre[0].toUpperCase()+nombre.slice(1)
}