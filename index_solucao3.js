const listaDeAprendizadosUl = document.querySelector('#to-learn');
let deveContinuar = true;
const materias = [];

while (deveContinuar) {
    let materia = prompt('Entra com o nome da matéria(para sair aperte em OK sem nenhum valor) : ');

    if (!materia) 
        deveContinuar = false;
    else 
        materias.push(materia);
}

materias.forEach(materia => {
    const novaMateria = document.createElement('li');
    novaMateria.innerText = materia;
    listaDeAprendizadosUl.append(novaMateria);
    console.log(novaMateria);
});

console.log(materias);