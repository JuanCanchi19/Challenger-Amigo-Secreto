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

