const listaDeAprendizadosUl = document.querySelector('#to-learn');

const novaMateria = document.createElement('li');
novaMateria.innerText = 'CSS';

listaDeAprendizadosUl.append(novaMateria);

// Há algumas maneiras de criar elementos novos, uma delas é criar variáveis e usar esse createElement, o que ficaria mt código, muitas repetições e muito verboso...

// const novaMateria2 = document.createElement('li'); 
// novaMateria2.innerText = 'React';
// listaDeAprendizadosUl.append(novaMateria2);

// const novaMateria3 = document.createElement('li');
// novaMateria3.innerText = 'POO';
// listaDeAprendizadosUl.append(novaMateria3);

// const novaMateria4 = document.createElement('li'); 
// novaMateria4.innerText = 'SQL';
// listaDeAprendizadosUl.append(novaMateria4);

