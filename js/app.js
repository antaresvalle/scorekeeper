var scores = {}; // Para llevar el registro de los jugadores y sus puntos
console.log(scores);
// 

function createPlayer(object, name) {
	object[name.toLowerCase()] = 0; //agregar un nombre e inicializamos en 0
	console.log(object);
}

function addPoints(name, points) {// asinandole los valores al objeto
	scores[name.toLowerCase()] += points;// += para actualizar y no mada mas asignar y sobreescribir
	console.log(scores);
}

function printAllPoints() {
	var arrayPlayers = Object.keys(scores);
	var resultados = "";//aqui se van a asociar indice con indice
	console.log(arrayPlayers);

	for (var i = 0; i < arrayPlayers.length; i++) {
		
		if(i == arrayPlayers.length -1){//se verifica que estemos en el ultimo index para quitar la coma que separa los elementos
			resultados += arrayPlayers[i] + ": "+ scores[arrayPlayers[i]];
		}else{
			resultados += arrayPlayers[i] + ": "+ scores[arrayPlayers[i]] + ", ";
		}


	}

	return resultados;

}

createPlayer(scores, "Ana");
addPoints("ana", 20);
addPoints("ana", 40);
createPlayer(scores, "Silvana");
addPoints("Silvana", 30);
printAllPoints();
console.log(printAllPoints());