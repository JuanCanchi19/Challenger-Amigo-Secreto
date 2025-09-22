// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Inicio: Creando un array para agregar los nombres. Estado de la aplicación: 
const amigos = []; //Esto nos permitirá guardar los nombres de los amigos en un tipo lista, colocamos const porque no vamos a reasignar la variable amigos

/*
// Stubs temporales para que el HTML no rompa
function agregarAmigo() { 
  console.log('agregarAmigo() llamado'); 
}
*/
function agregarAmigo() {
  const input = document.getElementById('amigo'); //Con esto pretendo que los elementos cuyo atributo sea id, sea exáctamente "amigo"
  const nombre = input.value.trim(); //Leeresmos lo que escriba el usuario, con el trim borramos los espacios al incio y al final

  // Comprobamos acá la entrada de no vacios
  if (!nombre) {
    alert('Por favor, inserte un nombre.');
    input.focus();
    return;
  }

//Actualizamos ela array
  amigos.push(nombre);

// Limpiamos el campo y dejamos el foco
  input.value = ''; //Esto borra lo escrito por el user después de agregarlo
  input.focus(); //Es para que el user no use tanto el mouse

  // (temporal) ver el estado en consola
  console.log('Amigos:', amigos);
}

// Implementamos la renderización de listas: 
function renderLista() {
  const ul = document.getElementById('listaAmigos');  // Acá obtenemos el <ul>
  ul.innerHTML = '';  //Acá limpiamos la lista actual

  for (const nombre of amigos) {     // usa SIEMPRE el MISMO nombre de variable
    const li = document.createElement('li');
    li.textContent = nombre;         // y aquí el MISMO identificador
    ul.appendChild(li);
  }
}
amigos.push(nombre);
renderLista();  // refrescamos la UI
//Comenzamos acá con el sorteo: 
function sortearAmigo() {
  //Debemos validar que haya amigos, evitamos un sorteo vacío.
  if (amigos.length === 0) {                                    //devuelve un número en [0,1).
    alert('No hay nombres para sortear. Agrega al menos uno.');
    return;
  }

  //Generamos un índice aleatorio [0, amigos.length)
  const indice = Math.floor(Math.random() * amigos.length);

  // Obtenemos el nombre sorteado
  const elegido = amigos[indice];

  // Mostramos el resultado en el <ul id="resultado">
  const ulResultado = document.getElementById('resultado');
  ulResultado.innerHTML = '';                 // limpiamos el resultado anterior
  const li = document.createElement('li');    // creamos un <li> nuevo
  li.textContent = elegido;                   // colocamos el nombre sorteado
  ulResultado.appendChild(li);                // agregamos al <ul>
}

